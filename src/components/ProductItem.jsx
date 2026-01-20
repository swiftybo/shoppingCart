import { useFood } from "../contexts/FoodContext";

function ProductItem({ name, stock, product, price }) {
    const { cart, handleAddToCart, handleIncreaseQuantity } = useFood();

    function addItem(product) {
        console.log(product);
        const itemAlreadyExists = cart.some(
            (item) => item.productName === product.description,
        );
        if (itemAlreadyExists) {
            handleIncreaseQuantity(product);
        } else {
            handleAddToCart(product);
            console.log(product);
        }
    }

    // This function takes the stock from state and calculates a derived state of
    // the remaining stock using the original stock (saved in state) and subtracting
    // from the amount in the cart. This results in it being impossible to add constraints
    // on less than 0 stock being allowed.
    function calculateRemainingStock() {
        const identifiedItemIndex = cart.findIndex(
            (item) => item.productName === name,
        );
        let amountInCart = cart[identifiedItemIndex]
            ? cart[identifiedItemIndex]?.quantity
            : 0;
        return stock - amountInCart;
    }

    const remainingStock = calculateRemainingStock();

    return (
        <section className="productIcon">
            <div className="productIcon-left">
                <h3>{name}</h3>
                <p>£{price}.00</p>
                <p className="color-grey">
                    {remainingStock === 0
                        ? "Out of stock"
                        : `${remainingStock} in stock`}
                </p>
                {remainingStock <= 5 && remainingStock > 2 && (
                    <div className="productIcon-stock">Almost Gone!</div>
                )}
                {remainingStock <= 2 && remainingStock > 0 && (
                    <div className="productIcon-stock">Last Few in Stock!</div>
                )}
            </div>
            <div className="productIcon-right">
                <button
                    className={`${
                        remainingStock === 0 && "disabled-button"
                    } productIcon_btn product-list-button`}
                    onClick={() => addItem(product)}
                    disabled={remainingStock === 0}
                >
                    {remainingStock === 0 ? "Out of Stock" : "Add to Cart"}
                </button>
            </div>
        </section>
    );
}

export default ProductItem;
