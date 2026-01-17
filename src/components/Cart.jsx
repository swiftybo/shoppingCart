import { useNavigate } from "react-router-dom";
import { useFood } from "../contexts/FoodContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useFood();

  const totalCost = cart.reduce(
    (acc, element) => acc + element.price * element.quantity,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      {cart.length > 0 ? (
        <div className="shopping-page">
          <div className="cart-headers">
            <button onClick={() => navigate("/")} className="cart-button">
              ←
            </button>
            <h2>Shopping Cart:</h2>
          </div>

          <ol className="shopping-cart">
            {cart.map((cartItem) => (
              <CartItem
                item={cartItem}
                key={cartItem.productName}
                name={cartItem.productName}
                quantity={cartItem.quantity}
                individualCost={cartItem.price}
              />
            ))}
          </ol>
          <div className="divider"></div>
          <div className="totals-row">
            <h2>Total</h2>
            <h2>£{totalCost}</h2>
          </div>
        </div>
      ) : (
        <div className="empty-cart">Empty</div>
      )}
    </>
  );
}

export default Cart;
