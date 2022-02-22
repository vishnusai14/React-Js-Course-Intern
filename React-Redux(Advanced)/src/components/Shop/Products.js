import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyItem = [
  {
    id: "m1",
    name: "Mobile Phone",
    description: "Connect With Everyone",
    price: 6000,
  },
  {
    id: "m2",
    name: "Laptop",
    description: "Be Master at your Work",
    price: 540000,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyItem.map((item) => {
          return (
            <ProductItem
              id={item.id}
              key={item.id}
              title={item.name}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
