import { showMessage } from 'react-native-flash-message';

const FlashMessage = (message, type) => {
  showMessage({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? '#1fdf1f' : '#ad0606',
    color: '#ffffff',
  });
};

export default FlashMessage;
