import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to={"/"} end>
        <h1 className="header_name sixtyfour">Almighty's</h1>
      </NavLink>
      <div className="header-cart-container">
        <Link to={"cart"}>
          <div className="cart-icon">🛒</div>
        </Link>
        <div className="number-of-items-in-cart">2</div>
      </div>
    </div>
  );
}

export default Header;
