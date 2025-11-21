import ProductItem from "./ProductItem.jsx";
import { useReducer } from "react";

const initialState = [
  { productName: "Leek", quantity: 2 },
  { productName: "Broccoli", quantity: 5 },
];
const catalogue = [
  {
    name: "Broccoli",
    stock: 5,
    price: 1.5,
    category: "vegetable",
  },
  { name: "Golden Kiwi", stock: 8, price: 1.85, category: "fruit" },
  { name: "Croissant", stock: 20, price: 1.1, category: "bread" },
  { name: "Leek", stock: 4, price: 0.9, category: "vegetable" },
];

function ProductList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Adds a new object of a product to the shopping cart state
  function handleAddToCart() {
    dispatch({ type: "add_product", payload: "apple" });
  }

  // Increases quantity of existing products in the shopping cart state
  function handleIncreaseQuantity(product) {
    dispatch({ type: "increase_quantity", payload: product });
  }

  return (
    <>
      {catalogue.map((food) => (
        <ProductItem
          name={food.name}
          stock={food.stock}
          price={food.price}
          handleClick={() => handleIncreaseQuantity(food.name)}
        ></ProductItem>
      ))}
      <div>You have {state[0]?.quantity} apples in your cart!</div>
    </>
  );
}

export default ProductList;
