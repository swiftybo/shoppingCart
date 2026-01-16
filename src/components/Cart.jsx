import { useFood } from "../contexts/FoodContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useFood();

  return (
    <>
      {cart.length > 0 ? (
        <div className="shopping-page">
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
                  individualCost={cartItem.price}
                />
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="empty-cart">Empty</div>
      )}
    </>
  );
}

export default Cart;
