import { FoodProvider } from "./contexts/FoodContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ErrorPage from "./pages/ErrorPage";
import { useEffect } from "react";
import { fetchFood } from "./Services/foodAPI";
import { useState } from "react";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function getFood() {
      const food = await fetchFood();
      const newFood = food.map((foodItem) => ({
        ...foodItem,
        individualCost: Math.floor(Math.random() * 10) + 1,
        stock: Math.floor(Math.random() * 10) + 1,
      }));
      setProductList(newFood);
      console.log(newFood);
    }

    getFood();
  }, []);

  return (
    <>
      <FoodProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage productList={productList} />} />
            <Route path="cart" element={<ShoppingCartPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </FoodProvider>
    </>
  );
}

export default App;
