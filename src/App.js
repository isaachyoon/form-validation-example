import React, { Component } from 'react';
import ErrorPage from './ErrorPage/ErrorPage';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import RandomComponent from './RandomComponent/RandomComponent';
import { array } from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorPage>
          {array.map(data => <RegistrationFrom></RegistrationFrom>)}
        </ErrorPage>
      </div>
    );
  }
}

export default App;