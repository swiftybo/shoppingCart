import { useState } from "react";

function CartItem({ name, quantity }) {
  const [quantityInput, setQuantityInput] = useState(quantity);

  const totalCost = quantityInput;

  function handleQuantity(e) {
    if (e.target.value < 0) {
      setQuantityInput(0);
    } else {
      setQuantityInput(e.target.value);
    }
  }

  return (
    <div className="cartProduct-item">
      <span>{name}</span>
      <span>-</span>
      <div className="price-column">{/* <span>£{productCost}</span> */}</div>
      <div className="quantity-column">
        <input
          onChange={handleQuantity}
          type="number"
          value={quantityInput}
          min="0"
        />
      </div>
      <div className="total-column">
        <span>£{totalCost}</span>
      </div>
    </div>
  );
}

export default CartItem;
