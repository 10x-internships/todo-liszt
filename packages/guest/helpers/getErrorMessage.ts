const getErrorMessage = (errorCode: string) => {
  switch (errorCode) {
    case 'tdl4000100':
      return 'Invalid email or password';
    case 'tdl4000200':
      return 'This email address is already existed';
    default:
      break;
  }
};

export default getErrorMessage;
