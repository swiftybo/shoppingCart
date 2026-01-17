import { createContext, useContext, useReducer } from "react";

const FoodContext = createContext();

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    // Add a new object with the action.payload being the name of the product to the shopping cart state array
    case "add_product":
      console.log(action.payload);
      return [
        ...state,
        { productName: action.payload.description, quantity: 1, price: 2 },
      ];
    // Increase the cart quantity by using the button
    case "increase_quantity": {
      // Iterates through the shopping cart state array to find a match for a specific product, e.g. apple
      const newState = state.map((product) => {
        if (product.productName === action.payload.productName) {
          console.log(action.payload);
          // Updates the quantity of the desired product by 1
          return {
            ...product,
            quantity: product.quantity + 1,
          };
          // For all other items in the shopping cart array, dont do any changes
        } else {
          return product;
        }
      });
      // return the new state of the shopping cart with quantity increased for a specific product
      return newState;
    }
    // Decrease the cart quantity by using the button
    case "decrease": {
      // Iterates through the shopping cart state array to find a match for a specific product, e.g. apple
      const newState = state.map((product) => {
        if (product.productName === action.payload.productName) {
          // Updates the quantity of the desired product by 1
          if (product.quantity === 0) return { ...product };

          return {
            ...product,
            quantity: product.quantity - 1,
          };
          // For all other items in the shopping cart array, dont do any changes
        } else {
          return product;
        }
      });
      // return the new state of the shopping cart with quantity increased for a specific product
      return newState;
    }
    case "set_product_quantity": {
      // Iterates through the shopping cart state array to find a match for a specific product, e.g. apple
      const newState = state.map((product) => {
        if (product.productName === action.payload.name) {
          // Updates the quantity of the desired product to the set amount
          console.log(action.payload.newQuantity);
          return {
            ...product,
            quantity: action.payload.newQuantity,
          };
          // For all other items in the shopping cart array, dont do any changes
        } else {
          return product;
        }
      });
      // return the new state of the shopping cart with the new quantity for a specific product
      return newState;
    }

    default:
      return state;
  }
}

function FoodProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState);

  // TODO: create constants below:
  // const handleAddToCart

  // Adds a new object of a product to the shopping cart state
  function handleAddToCart(product) {
    dispatch({ type: "add_product", payload: product });
  }

  // Increases quantity of existing products in the shopping cart state
  function handleIncreaseQuantity(product) {
    dispatch({ type: "increase_quantity", payload: product });
  }

  // Decrease quantity of existing products in the shopping cart state
  function handleDecreaseQuantity(product) {
    dispatch({ type: "decrease", payload: product });
  }

  function setProductQuantity(product, quantity) {
    dispatch({
      type: "set_product_quantity",
      payload: { name: product, newQuantity: quantity },
    });
  }

  return (
    <FoodContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleIncreaseQuantity,
        setProductQuantity,
        handleDecreaseQuantity,
      }}
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
