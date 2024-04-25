import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import CircularIndeterminate from "./Components/Spiner/CircularIndeterminate";

//Make React Lazy
const Navbar = lazy(() => import("./Components/NavBar/Navbar"));
const HomePage = lazy(() => import("./Pages/Home/Home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<CircularIndeterminate></CircularIndeterminate>}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
