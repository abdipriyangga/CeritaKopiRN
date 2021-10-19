const initStateProfile = {
  uri: '',
  type: '',
  name: '',
  isUpload: false,
  profile: {},
};

const profile = (state = initStateProfile, action) => {
  switch (action.type) {
    case 'SET_PHOTO':
      return {
        ...state,
        uri: action.payload.uri,
        type: action.payload.type,
        name: action.payload.name,
      };
    case 'SET_UPLOAD_STATUS':
      return {
        ...state,
        isUpload: action.payload,
      };
    case 'SET_GET_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default profile;
