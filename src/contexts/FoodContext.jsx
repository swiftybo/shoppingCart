import { createContext, useContext, useReducer } from "react";

const FoodContext = createContext();

const initialState = [
  { productName: "Leek", quantity: 2, individualCost: 1 },
  { productName: "Broccoli", quantity: 5, individualCost: 2 },
];

function reducer(state, action) {
  switch (action.type) {
    // Add a new object with the action.payload being the name of the product to the shopping cart state array
    case "add_product":
      return [...state, { productName: action.payload, quantity: 1 }];
    case "increase_quantity": {
      // Iterates through the shopping cart state array to find a match for a specific product, e.g. apple
      const newState = state.map((product) => {
        if (product.productName === action.payload) {
          // Updates the quantity of the desired product
          return {
            productName: product.productName,
            quantity: product.quantity + 1,
          };
          // For all items in the shopping cart array, dont do any changes
        } else {
          return product;
        }
      });
      // return the new state of the shopping cart with quantity increased for a specific product
      return newState;
    }

    default:
      return state;
  }
}

function FoodProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState);

  console.log(cart);
  // TODO: create constants below:
  // const handleAddToCart

  // Adds a new object of a product to the shopping cart state
  function handleAddToCart() {
    dispatch({ type: "add_product", payload: "apple" });
  }

  // Increases quantity of existing products in the shopping cart state
  function handleIncreaseQuantity(product) {
    dispatch({ type: "increase_quantity", payload: product });
  }

  return (
    <FoodContext.Provider
      value={{ cart, handleAddToCart, handleIncreaseQuantity }}
    >
      {children}
    </FoodContext.Provider>
  );
}

function useFood() {
  const context = useContext(FoodContext);

  if (context === undefined) {
    throw new Error("You used the FoodContext out of the FoodContext Provider");
  }

  return context;
}

export { useFood, FoodProvider };
