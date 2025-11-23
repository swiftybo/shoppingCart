import { useFood } from "../contexts/FoodContext";

function ProductItem({ name, stock, price, handleClick }) {
  const { cart, handleAddToCart, handleIncreaseQuantity } = useFood();

  function addItem(product, price) {
    const itemAlreadyExists = cart.some((item) => item.productName === product);
    if (itemAlreadyExists) {
      handleIncreaseQuantity(product);
    } else {
      handleAddToCart(product, price);
    }
  }

  return (
    <section className="productIcon">
      <div className="productIcon-left">
        <h2 style={{ marginTop: "0rem", marginBottom: "1.5rem" }}>{name}</h2>
        <div style={{ fontSize: "1.2rem" }}>${price.toFixed(2)}</div>
      </div>
      <div className="productIcon-right">
        <button
          className="productIcon_btn"
          onClick={() => addItem(name, price)}
        >
          Add to Cart
        </button>
        {stock <= 5 && (
          <div className="productIcon-stock">Almost Gone! Stock: {stock}</div>
        )}
      </div>
    </section>
  );
}

export default ProductItem;
