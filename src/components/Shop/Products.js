import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  { id: 6, price: 6, title: 'My First Book', description: 'My first description' },
  { id: 4, price: 4, title: 'My Second Book', description: 'The second book I wrote' }
];
const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
