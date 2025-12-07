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
      {productList?.map((food, index) => (
        <ProductItem
          name={food.description}
          brand={food.brandOwner}
          stock={food.stock}
          // price={food.individualCost}
          index={index}
        ></ProductItem>
      ))}
      {/* <div>You have {state[0]?.quantity} apples in your cart!</div> */}
    </>
  );
}

export default ProductList;
