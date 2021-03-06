import http from '../../helpers/http';
import { API_URL } from '@env';

// const URL = 'http://localhost:8090';

const getProducts = url => {
  if (!url) {
    return async dispatch => {
      const { data } = await http().get(`${API_URL}/items`);
      console.log('data: ', data);
      dispatch({
        type: 'SET_GET_PRODUCTS',
        payload: {
          items: data.results,
          pageInfo: data.pageInfo,
        },
      });
      console.log(data);
    };
  } else {
    return async dispatch => {
      const { data } = await http().get(url);
      dispatch({
        type: 'SET_NEXT_PRODUCTS',
        payload: {
          items: data.results,
          pageInfo: data.pageInfo,
        },
      });
    };
  }
};

const getDetailProducts = id => {
  return async dispatch => {
    const { data } = await http().get(`${API_URL}/items/${id}`);
    console.log('data dettail: ', data);
    dispatch({
      type: 'SET_GET_DETAILS',
      payload: data.results,
    });
  };
};

const searchProducts = search => {
  return async dispatch => {
    const { data } = await http().get(`${API_URL}/items/search?q=${search}`);
    dispatch({
      type: 'SET_GET_PRODUCTS',
      payload: { products: data.results, pageInfo: data.pageInfo },
    });
    dispatch({
      type: 'SET_PRODUCT_CATEGORY',
      payload: { productCategory: data.results, pageInfo: data.pageInfo },
    });
  };
};
export { getProducts, getDetailProducts, searchProducts };
