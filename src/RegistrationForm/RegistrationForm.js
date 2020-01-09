import React, { Component } from 'react';
import './RegistrationForm.css';
import ValidationError from '../ValidationError/ValidationError'

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        touched: false
      },
      password: {
        value: '',
        touched: false
      },
      repeatPassword: {
        value: '',
        touched: false
      }
    }
  }

  updateName(name) {
    this.setState({name: {
      value: name,
      touched: true
    }});
  }

  validateName() {
    const name = this.state.name.value;
    if (name.length === 0) {
      return 'Please enter name';
    } else if (name.match(/[0-9]/)) {
      return 'Name should not contain any numbers';
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return 'Password is required';
    } else if (password.length < 6 || password.length > 72) {
      return 'Password must be between 6 and 72 characters long';
    } else if (!password.match(/[0-9]/)) {
      return 'Password must contain at least one number';
    }
  }

  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return 'Passwords do not match';
    }
  }

  updatePassword(password) {
    this.setState({password: {
      value: password,
      touched: true
    }});
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({repeatPassword: {
      value: repeatPassword,
      touched: true
    }});
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }

  render () {
    const nameError = this.validateName();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();
    return (
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <h2>Register</h2>
        {/* <h1>{this.props.whatever.hi}</h1> */}
        <div className="registration__hint">* required field</div>  
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" className="registration__control"
            name="name" id="name"
            onChange={e => this.updateName(e.target.value)}/>
          {this.state.name.touched && <ValidationError message={nameError}></ValidationError>}
        </div>
        <div className="form-group">
           <label htmlFor="password">Password *</label>
           <input type="password" className="registration__control"
            name="password" id="password" 
            onChange={e => this.updatePassword(e.target.value)}/>
            {this.state.password.touched && <ValidationError message={passwordError}></ValidationError>}
           <div className="registration__hint">6 to 72 characters, must include a number</div>
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input type="password" className="registration__control"
            name="repeatPassword" id="repeatPassword"
            onChange={e => this.updateRepeatPassword(e.target.value)}/>
          {this.state.repeatPassword.touched && <ValidationError message={repeatPasswordError}></ValidationError>}
        </div>
 
        <div className="registration__button__group">
         <button type="reset" className="registration__button">
             Cancel
         </button>
         <button type="submit" 
          className="registration__button"
          disabled={this.validateName() || this.validatePassword() || this.validateRepeatPassword()}>
             Save
         </button>
        </div>
      </form>
    )
  }
}

export default RegistrationForm;
