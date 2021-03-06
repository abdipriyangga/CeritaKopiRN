const initialState = {
  data: [],
  detail: {},
  pageInfo: {},
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GET_PRODUCTS':
      return {
        ...state,
        data: action.payload.items,
        pageInfo: action.payload.pageInfo,
      };
    case 'SET_NEXT_PRODUCTS':
      return {
        ...state,
        data: [...state.data, ...action.payload.items],
        pageInfo: action.payload.pageInfo,
      };
    case 'SET_GET_DETAILS':
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default items;
