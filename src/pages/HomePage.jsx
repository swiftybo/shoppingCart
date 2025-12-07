import Header from "../components/Header";
import ProductList from "../components/ProductList";

export default function HomePage({ productList }) {
  return (
    <>
      <Header />
      <ProductList productList={productList} />
    </>
  );
}
