export default function validateLogin(values) {
  const errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username is required.';
  } else if (values.username.length < 13) {
    errors.username = 'Username must be at least 13 characters.';
  } else if (values.username.length > 25) {
    errors.username = 'Username cannot exceed 20 characters.';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required.';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }


  
  return errors;
}
