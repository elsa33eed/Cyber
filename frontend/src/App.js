import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import CircularIndeterminate from "./Components/Spiner/CircularIndeterminate";
import Footer from "./Components/Footer/Footer";

//Make React Lazy
const Navbar = lazy(() => import("./Components/NavBar/Navbar"));
const HomePage = lazy(() => import("./Pages/Home/Home"));
const ShoppingCart = lazy(() => import("./Pages/Shopping-cart/Cart"));
const ShoppingStepOne = lazy(() =>
  import("./Pages/Shipping-steps/Step One/StepOne")
);
const ShoppingStepTwo = lazy(() =>
  import("./Pages/Shipping-steps/Step Two/StepTwo")
);
const ShoppingStepThree = lazy(() =>
  import("./Pages/Shipping-steps/Step Three/StepThree")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<CircularIndeterminate></CircularIndeterminate>}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/cart" element={<ShoppingCart></ShoppingCart>} />
            <Route
              path="/cart/stepOne"
              element={<ShoppingStepOne></ShoppingStepOne>}
            />
            <Route
              path="/cart/stepTwo"
              element={<ShoppingStepTwo></ShoppingStepTwo>}
            />
            <Route
              path="/cart/stepThree"
              element={<ShoppingStepThree></ShoppingStepThree>}
            />
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </Suspense>
    </div>
  );
}

export default App;
