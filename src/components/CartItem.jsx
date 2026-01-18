import { useState } from "react";
import { useFood } from "../contexts/FoodContext";
import { useEffect } from "react";

function CartItem({ item, name, quantity, individualCost, productStock }) {
  const [quantityInput, setQuantityInput] = useState(quantity);
  const { handleIncreaseQuantity, setProductQuantity, handleDecreaseQuantity } =
    useFood();

  const totalCost = individualCost * quantity;

  function handleQuantity(e) {
    if (e.target.value < 0) {
      setQuantityInput(0);
    } else {
      setQuantityInput(Number(e.target.value));
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
    setQuantityInput(Number(quantity));
  }, [quantity]);

  return (
    <div className="cartProduct-item">
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p className="color-grey">£{individualCost} each</p>
      </div>
      <div className="cart-product-numbers">
        <div className="no-stock-div">
          {quantity >= productStock ? "No more stock" : ""}
        </div>
        <button
          className="cart-button"
          onClick={() => handleDecreaseQuantity(item)}
        >
          {quantity === 1 ? "Remove" : "-"}
        </button>
        <input
          className="text-normal cart-item-quantity"
          onKeyDown={handleUpdateQuantity}
          onChange={handleQuantity}
          onBlur={(e) => setProductQuantity(name, Number(e.target.value))}
          type="text"
          value={quantityInput}
          min="0"
        />
        <button
          className="cart-button"
          onClick={() => handleIncreaseQuantity(item)}
          disabled={quantity >= productStock}
        >
          +
        </button>
        <p className="text-normal cart-total-item-cost">£{totalCost}</p>
      </div>
    </div>
  );
}

export default CartItem;
