import { useFood } from "../contexts/FoodContext";

function ProductItem({ name, brand, stock, price, handleClick }) {
  const { cart, handleAddToCart, handleIncreaseQuantity } = useFood();

  function addItem(product) {
    const itemAlreadyExists = cart.some((item) => item.productName === product);
    if (itemAlreadyExists) {
      handleIncreaseQuantity(product);
    } else {
      handleAddToCart(product);
    }
  }

  return (
    <section className="productIcon">
      <div className="productIcon-left">
        <h2>{name}</h2>
        <h3>{brand}</h3>
        {/* <div style={{ fontSize: "1.2rem" }}>${price.toFixed(2)}</div> */}
      </div>
      {/* <div className="productIcon-right">
        <button className="productIcon_btn" onClick={() => addItem(name)}>
          Add to Cart
        </button>
        {stock <= 5 && (
          <div className="productIcon-stock">Almost Gone! Stock: {stock}</div>
        )}
      </div> */}
    </section>
  );
}

export default ProductItem;
