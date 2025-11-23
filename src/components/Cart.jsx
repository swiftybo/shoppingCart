import { useFood } from "../contexts/FoodContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart, setProductQuantity } = useFood();

  return (
    <>
      <h2>Shopping Cart:</h2>
      <div className="cart-headers">
        <h1>Product</h1>
        <h1>Quantity</h1>
        <h1>Total Price</h1>
      </div>

      <ol className="shopping-cart">
        {cart.map((cartItem) => (
          <li>
            <CartItem
              key={cartItem.productName}
              name={cartItem.productName}
              quantity={cartItem.quantity}
              individualCost={cartItem.individualCost}
            />
          </li>
        ))}
      </ol>
    </>
  );
}

export default Cart;
