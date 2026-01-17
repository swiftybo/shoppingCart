import { useState } from "react";
import { useFood } from "../contexts/FoodContext";
import { useEffect } from "react";

function CartItem({ item, name, quantity, individualCost }) {
  const [quantityInput, setQuantityInput] = useState(quantity);
  const { handleIncreaseQuantity, setProductQuantity, handleDecreaseQuantity } =
    useFood();

  const totalCost = individualCost * quantity;

  function handleQuantity(e) {
    if (e.target.value < 0) {
      setQuantityInput(0);
    } else {
      setQuantityInput(e.target.value);
    }
  }

  function handleUpdateQuantity(e) {
    if (e.key === "Enter") {
      setProductQuantity(name, Number(e.target.value));
      e.target.blur();
    }
  }

  // Update the input field when quantity changes (e.g. when the user presses the + or - minus buttons)
  useEffect(() => {
    setQuantityInput(quantity);
  }, [quantity]);

  return (
    <div className="cartProduct-item">
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p className="color-grey">£{individualCost} each</p>
      </div>
      <div className="cart-product-numbers">
        <button
          className="cart-button"
          onClick={() => handleDecreaseQuantity(item)}
        >
          -
        </button>
        <input
          className="text-normal cart-item-quantity"
          onKeyDown={handleUpdateQuantity}
          onChange={handleQuantity}
          onBlur={(e) => setProductQuantity(name, e.target.value)}
          type="text"
          value={quantityInput}
          min="0"
        />
        <button
          className="cart-button"
          onClick={() => handleIncreaseQuantity(item)}
        >
          +
        </button>
        <p className="text-normal cart-total-item-cost">£{totalCost}</p>
      </div>
    </div>
  );
}

export default CartItem;
