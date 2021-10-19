const initialHistory = {
  history: [],
  details: [],
};
const history = (state = initialHistory, action) => {
  switch (action.type) {
    case 'SET_HISTORY':
      return {
        ...state,
        history: action.payload,
      };
    case 'SET_CLEAR_HISTORY':
      return {
        ...state,
        history: [],
      };
    case 'SET_GET_DETAILS_HISTORY':
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default history;
