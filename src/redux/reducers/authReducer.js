const initStateAuth = {
  isRegister: false,
};

const authReducer = (state = initStateAuth, action) => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {
        ...state,
        isRegister: !state.isRegister,
      };
    default:
      return state;
  }
};

export default authReducer;
