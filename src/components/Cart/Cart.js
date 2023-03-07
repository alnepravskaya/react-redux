import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const { items: cartItem } = useSelector((state) => state.cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItem.map((item) => (
          <CartItem
            item={{
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              id: item.id
            }}
            key={item.id}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
