import { Link, NavLink } from "react-router-dom";
import { useFood } from "../contexts/FoodContext";
import { LuShoppingCart } from "react-icons/lu";

function Header() {
    const { cart } = useFood();

    // Calculates the total quantity of all items in the cart to display in the cart button in the header
    const totalCartQuantity = cart.reduce(
        (acc, currentQuantity) => acc + currentQuantity.quantity,
        0,
    );

    return (
        <div className="header">
            <NavLink to={"/"} end>
                <h1 className="header_name">🛍️ CJ's 🛍️</h1>
            </NavLink>
            <div className="header-cart-container">
                <Link to={"/cart"}>
                    <div className="product-list-button">
                        <LuShoppingCart /> Cart ({totalCartQuantity})
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
