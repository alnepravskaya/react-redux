import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { uiActions } from './store/ui-slice';
import { fetchCardData, sendCardData } from './store/cart-actions';

function App() {
  const dispatch = useDispatch();
  const { isCardVisible, notification } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    dispatch(fetchCardData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }
    if (cart.changed) {
      dispatch(sendCardData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {isCardVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
