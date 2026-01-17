import ProductItem from "./ProductItem.jsx";

function ProductList({ productList }) {
  return (
    <>
      {productList?.map((product, index) => (
        <ProductItem
          product={product}
          key={productList[index].fdcId}
          name={product.description}
          brand={product.brandOwner}
          stock={product.stock}
          price={product.individualCost}
          index={index}
        />
      ))}
      {/* <div>You have {state[0]?.quantity} apples in your cart!</div> */}
    </>
  );
}

export default ProductList;
