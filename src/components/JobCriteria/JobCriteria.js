import React, { Component } from 'react';
import remove from 'lodash.remove';
import Form from './Form';
import Summary from './Summary';
import Card from '../UI/Card';

class JobCriteria extends Component {
  state = {
    experience: '',
    educations: [],
    hours: {
      min: '',
      max: '',
    },
    isFormSaved: false,
  };

  handleInputChange = e => {
    const { educations } = this.state;
    const { target } = e;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    if (target.type === 'checkbox') {
      if (value) {
        this.setState({ educations: [...educations, name] });
      } else {
        const newEducations = [...educations];
        remove(newEducations, item => item === name);
        this.setState({ educations: newEducations });
      }
    } else if (name === 'experience') {
      this.setState({ experience: value });
    } else {
      this.setState({
        hours: {
          ...this.state.hours,
          [name]: value,
        },
      });
    }
  };

  handleSubmitSuccess = () => {
    this.setState({ isFormSaved: true });
  };

  handleEdit = () => {
    this.setState({ isFormSaved: false });
  };

  render() {
    const { isFormSaved } = this.state;
    return (
      <Card>
        {isFormSaved ? (
          <Summary handleEdit={this.handleEdit} formState={this.state} />
        ) : (
          <Form
            formState={this.state}
            handleSubmitSuccess={this.handleSubmitSuccess}
            onChange={this.handleInputChange}
          />
        )}
      </Card>
    );
  }
}

export default JobCriteria;
