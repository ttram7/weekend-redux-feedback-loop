import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import StepFour from '../StepFour/StepFour';
import ReviewPage from '../ReviewPage/ReviewPage';
import SuccessPage from '../SuccessPage/SuccessPage';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <StepOne />
        </Route>
        <Route path="/step/two">
          <StepTwo />
        </Route>
        <Route path="/step/three">
          <StepThree />
        </Route>
        <Route path="/step/four">
          <StepFour />
        </Route>
        <Route path="/step/review">
          <ReviewPage />
        </Route>
        <Route path="/step/success">
          <SuccessPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
