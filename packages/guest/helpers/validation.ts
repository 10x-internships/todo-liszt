const validation = {
  email: {
    required: {
      value: true,
      message: 'This field is required',
    },
    pattern: {
      value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      message: 'Invalid email address',
    },
  },
  password: {
    required: {
      value: true,
      message: 'This field is required',
    },
    minLength: {
      value: 8,
      message: 'Password must have 8+ characters',
    },
  },
};

export default validation;
