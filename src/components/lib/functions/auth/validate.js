import validator from 'validator';
import _ from 'lodash';

// Function to check whether the email and password field are empty.

export default function validate(data) {
  const errors = {};
  if (validator.isEmpty(data.email)) {
    errors.email = 'this email field is required';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'this password field is required';
  }
  return {
    errors,
    isValid: _.isEmpty(errors),
  };
}
