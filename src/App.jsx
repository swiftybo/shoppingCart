import { FoodProvider } from "./contexts/FoodContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <FoodProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="cart" element={<ShoppingCartPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </FoodProvider>
    </>
  );
}

export default App;
