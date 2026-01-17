import Cart from "../components/Cart";
import Header from "../components/Header";

function ShoppingCartPage({ productList }) {
  return (
    <div>
      <Header />
      <Cart productList={productList} />
    </div>
  );
}

export default ShoppingCartPage;
