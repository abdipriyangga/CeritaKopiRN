import http from '../../helpers/http';
// const { REACT_APP_URL: URL } = process.env;
const URL = 'http://localhost:8090';

const getCategory = () => {
  return async dispatch => {
    const { data } = await http().get(`${URL}/categories`);
    dispatch({
      type: 'SET_GET_CATEGORY',
      payload: {
        category: data.results,
      },
    });
  };
};

const getProductCategory = (id, url) => {
  try {
    if (!url) {
      return async dispatch => {
        const { data } = await http().get(`${URL}/categories/${id}/items`);
        dispatch({
          type: 'SET_PRODUCT_CATEGORY',
          payload: {
            productCategory: data.results,
            pageInfo: data.pageInfo,
          },
        });
      };
    } else {
      return async dispatch => {
        const { data } = await http().get(url);
        dispatch({
          type: 'SET_NEXT_PRODUCTS_CATEGORY',
          payload: {
            productCategory: data.results,
            pageInfo: data.pageInfo,
          },
        });
      };
    }
  } catch (error) {
    return async dispatch => {
      dispatch({
        type: 'SET_PRODUCT_CATEGORY_FAILED',
        payload: {
          errMsg: error.message,
        },
      });
    };
  }
};

export { getCategory, getProductCategory };
