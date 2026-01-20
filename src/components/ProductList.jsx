import ProductItem from "./ProductItem.jsx";

function ProductList({ productList }) {
    return (
        <>
            <h2 className="productlist_header">Products</h2>
            <div className="productlist">
                {productList?.map((product, index) => (
                    <ProductItem
                        product={product}
                        key={productList[index].fdcId}
                        name={product.description}
                        stock={product.stock}
                        price={product.individualCost}
                        index={index}
                    />
                ))}
                {/* <div>You have {state[0]?.quantity} apples in your cart!</div> */}
            </div>
        </>
    );
}

export default ProductList;
