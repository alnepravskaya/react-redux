import { uiActions } from './ui-slice';
import { cardActions } from './cart-slice';

export const sendCardData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending card data'
      })
    );
    const sendRequest = async () => {
      const response = await fetch('https://user-hooks-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity
        })
      });
      if (!response.ok) {
        throw new Error('Sending card data failed');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sending card data successfully'
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending card data failed'
        })
      );
    }
  };
};

export const fetchCardData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://user-hooks-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error('Could not fetch card data');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cardActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching card data failed'
        })
      );
    }
  };
};
