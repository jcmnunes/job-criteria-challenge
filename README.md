# Job Criteria Form - Code challenge

App can be visited live [here](https://zealous-albattani-1158c9.netlify.com/)

Main features:

- Purely React (no external data-management libraries)
- Styled components are being used for styling
- All functional requirements are implemented
- Bootstrapped with
  [Create React App](https://github.com/facebook/create-react-app)

To save time:

- Unit test coverage is low since I only wrote tests for the most complex
  components (see [Unit-tests](#unit-tests) section below).
- CSS Grid was not used to facilitate IE11 support.
- App is not mobile friendly (layout works for sreen-widths > 700px).
- Considering the design mockups, the primary button in the Form has a cyan
  background. For the summary view, the button color is blue. I opted to use
  the same button on both views.

## Unit-tests 

I wrote some unit-test using Jest and Enzyme. The tests are:

- [`src/components/JobCriteria/JobCriteria.spec.js`](src/components/JobCriteria/JobCriteria.spec.js)
- [`src/components/JobCriteria/Form/Form.spec.js`](src/components/JobCriteria/Form/Form.spec.js)

These are, by far, the most complex components. I hope those tests can be
sufficient to prove my testing skills. In my opinion, the tests that are missing
are either easy to do or are a little bit repetitive (and they can be
time-consuming).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in
the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br> Your app is
ready to be deployed!
