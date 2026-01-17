import { useFood } from "../contexts/FoodContext";

function ProductItem({ product, name, brand, stock, index }) {
  const { cart, handleAddToCart, handleIncreaseQuantity } = useFood();

  function addItem(product) {
    const itemAlreadyExists = cart.some(
      (item) => item.productName === product.description
    );
    console.log(product);
    console.log(itemAlreadyExists);
    if (itemAlreadyExists) {
      handleIncreaseQuantity(product);
    } else {
      handleAddToCart(product);
      console.log(product);
    }
  }

  function calculateRemainingStock() {
    const initialStock = stock;
    let amountInCart = 0;
    if (cart.length > 0 && cart[index]?.quantity) {
      amountInCart = cart[index].quantity;
    }
    return stock - amountInCart;
  }

  const remainingStock = calculateRemainingStock();

  return (
    <section className="productIcon">
      <div className="productIcon-left">
        <h2>{name}</h2>
        <h3>{brand}</h3>
      </div>
      <div className="productIcon-right">
        <button className="productIcon_btn" onClick={() => addItem(product)}>
          Add to Cart
        </button>
        <p>{`Stock: ${remainingStock}`}</p>
        {remainingStock <= 5 && remainingStock > 2 && (
          <div className="productIcon-stock">Almost Gone!</div>
        )}
        {remainingStock <= 2 && (
          <div className="productIcon-stock">Last Few in Stock!</div>
        )}
      </div>
    </section>
  );
}

export default ProductItem;
