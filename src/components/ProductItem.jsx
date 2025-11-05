function ProductItem({ name, stock, price, category }) {
  return (
    <div className="productIcon">
      <h2>{name}</h2>
      <div style={{ fontSize: "1.5rem" }}>${price}</div>
      <button className="addProductBtn">Add to Cart</button>
      {/* <div>Stock: {stock}</div> */}
    </div>
  );
}

export default ProductItem;
