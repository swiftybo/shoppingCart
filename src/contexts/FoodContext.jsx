import { createContext, useContext, useReducer } from "react";

const FoodContext = createContext();

const initialState = [];

function reducer(state, action) {
    const { description, individualCost } = action.payload;
    switch (action.type) {
        // Add a new object with the action.payload being the name of the product to the shopping cart state array
        case "add_product":
            return [
                ...state,
                {
                    description,
                    quantity: 1,
                    price: individualCost,
                },
            ];

        // Increase the cart quantity by using the button
        case "increase_quantity": {
            // Iterates through the shopping cart state array to find a match for a specific product, e.g. apple
            console.log(state);
            const newState = state.map((product) => {
                if (product.description === action.payload.description) {
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
            return newState;
        }

        // Decrease the cart quantity by using the button
        case "decrease": {
            // Iterates through the shopping cart state array to find a match for a specific product, e.g. apple
            const newState = state
                .map((product) => {
                    if (product.description === action.payload.description) {
                        // Updates the quantity of the desired product by 1
                        return {
                            ...product,
                            quantity: product.quantity - 1,
                        };
                        // For all other items in the shopping cart array, dont do any changes
                    } else {
                        return product;
                    }
                })
                // Removes the product from the cart when the quantity reaches 0
                .filter((product) => product.quantity > 0);
            return newState;
        }

        // This is for when the user specifically enters a quantity in the input element
        case "set_product_quantity": {
            // Iterates through the shopping cart state array to find a match for a specific product, e.g. apple
            const newState = state.map((product) => {
                if (product.description === action.payload.name) {
                    if (action.payload.newQuantity <= 0) {
                        const newState = state.map((product) => {
                            if (
                                product.description ===
                                action.payload.description
                            ) {
                                // If the product quantity reaches 0, then it removes it from the cart state
                                const filteredCart = state.cart.filter(
                                    (cartItem) =>
                                        cartItem.description ===
                                        action.payload.description,
                                );
                                console.log(filteredCart);
                            }
                        });
                        console.log(newState);
                    }
                    // Updates the quantity of the desired product to the set amount
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

    // Removes the product from the state, for example when the user decrease the quantity to 0 in the cart
    function handleRemoveFromCart(product) {
        dispatch({ type: "remove_product", payload: product });
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
                handleRemoveFromCart,
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
        throw new Error(
            "You used the FoodContext out of the FoodContext Provider",
        );
    }

    return context;
}

export { useFood, FoodProvider };
