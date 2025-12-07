import { useFood } from "../contexts/FoodContext";

function ProductItem({ name, stock, price, index, handleClick }) {
  const { cart, handleAddToCart, handleIncreaseQuantity } = useFood();

  function addItem(product) {
    const itemAlreadyExists = cart.some((item) => item.productName === product);
    if (itemAlreadyExists) {
      handleIncreaseQuantity(product);
    } else {
      handleAddToCart(product);
    }
  }

  function calculateRemainingStock() {
    const initialStock = stock
    let amountInCart = 0
    if (cart.length > 0 && cart[index]?.quantity) {
      amountInCart = cart[index].quantity
    }
    return stock - amountInCart
  }

  const remainingStock = calculateRemainingStock()

  return (
    <section className="productIcon">
      <div className="productIcon-left">
        <h2 style={{ marginTop: "0rem", marginBottom: "1.5rem" }}>{name}</h2>
        <div style={{ fontSize: "1.2rem" }}>${price.toFixed(2)}</div>
      </div>
      <div className="productIcon-right">
        <button className="productIcon_btn" onClick={() => addItem(name)}>
          Add to Cart
        </button>
        <p>{remainingStock}</p>
        {stock <= 5 && (
          <div className="productIcon-stock">Almost Gone! Stock: {stock}</div>
        )}
      </div>
    </section>
  );
}

export default ProductItem;
