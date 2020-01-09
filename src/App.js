import React, { Component } from 'react';
import ErrorPage from './ErrorPage/ErrorPage';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import RandomComponent from './RandomComponent/RandomComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorPage>
          <RegistrationForm/>
          <RandomComponent/>
        </ErrorPage>
      </div>
    );
  }
}

export default App;