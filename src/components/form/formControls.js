import { useState } from 'react';
import EmailAndPassword from '../../firebase/authentication/emailAndPassword';

const initialFormValues = {
  email: '',
  password: ''
}

export default function Formcontrols() {
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setErrors ] = useState({});

  const { 
    registerWithEmailAndPassword,
    signInWithEmailAndPassword
  } = EmailAndPassword();

  const handleInputChange = function(event) {
    const { name, value } = event.target;
    // Object spread syntax!
    setFormValues({
      ...formValues,
      [name]: value
    });

    validateFormValue({
      [name]: value
    })
  }

  const formIsValid = function() {
    let isValid = true;
    if (Object.values(formValues).every(Boolean) && Object.values(formErrors).every(function(value) { return value === '' })) {
      return isValid;
    }
    return !isValid;
  }

  const validateFormValue = function() {
    let temp = { ...formErrors };
    
    if ('email' in formValues) {
      temp.email = formValues.email ? '' : 'Email field is required'
      if (formValues.email) {
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValues.email) ? '' : 'Email is not valid.'
      }
    }

    if ('fullname' in formValues) {
      temp.fullname = formValues.fullname ? '' : 'Full name field is required'
    }
    
    if ('username' in formValues) {
      temp.username = formValues.username ? '' : 'Username field is required' 
    }

    if ('password' in formValues) {
      temp.password = formValues.password ? '': 'Password field is required'
    }

    setErrors({
      ...temp
    });

  }

  const handleSignup = function(history) {
    return async function(event) {
      event.preventDefault();
      if (formIsValid()) {
        console.log('Form is valid!');
        let user = await registerWithEmailAndPassword(formValues);
        if (user.uid) {
          history.push('/home');
        }
      }
    }
  }

  const handleLogin = function(history) {
    return async function(event) {
      event.preventDefault();
      if (formIsValid()) {
        console.log('Form is valid!');
        let user = await signInWithEmailAndPassword(formValues);
        if (user.uid) {
          history.push('/home');
        }
      }
    }
  }

  return {
    handleInputChange,
    handleSignup,
    handleLogin,
    formIsValid,
    formErrors
  };
}