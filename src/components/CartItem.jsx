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
      console.log("test");
    }
  }

  // Update the input field when quantity changes (e.g. when the user presses the + or - minus buttons)
  useEffect(() => {
    setQuantityInput(quantity);
  }, [quantity]);

  return (
    <div className="cartProduct-item">
      <div>{name}</div>
      <div>Test £{individualCost}</div>
      <div>-</div>
      <div className="total-column">
        <span>£{totalCost}</span>
      </div>
      <div className="quantity-column">
        <button onClick={() => handleIncreaseQuantity(item)}>+</button>
        <input
          onKeyDown={handleUpdateQuantity}
          onChange={handleQuantity}
          type="number"
          value={quantityInput}
          min="0"
        />
        <button onClick={() => handleDecreaseQuantity(item)}>-</button>
      </div>
    </div>
  );
}

export default CartItem;
