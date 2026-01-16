import ProductItem from "./ProductItem.jsx";

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
