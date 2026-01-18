import Header from "../components/Header";
import ProductList from "../components/ProductList";

export default function HomePage({ productList }) {
  return (
    <>
      <Header />
      <div className="main-content">
        <ProductList productList={productList} />
      </div>
    </>
  );
}
