

const loginReducer = (state = 'logged in', action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
}

export default loginReducer;