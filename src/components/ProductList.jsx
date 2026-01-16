import ProductItem from "./ProductItem.jsx";

const catalogue = [
  {
    productName: "Leek",
    stock: 8,
    individualCost: 0.9,
    category: "vegetable",
  },
  {
    productName: "Broccoli",
    stock: 15,
    individualCost: 1.5,
    category: "vegetable",
  },
  {
    productName: "Golden Kiwi",
    stock: 8,
    individualCost: 2.15,
    category: "fruit",
  },
  {
    productName: "Croissant",
    stock: 20,
    individualCost: 0.5,
    category: "bread",
  },
];

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
