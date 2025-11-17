export default function validateLogin(values) {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = 'email is required.';
  } else if (values.email.length < 13) {
    errors.email = 'email must be at least 13 characters.';
  } else if (values.email.length > 25) {
    errors.email = 'email cannot exceed 20 characters.';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required.';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }


  
  return errors;
}
