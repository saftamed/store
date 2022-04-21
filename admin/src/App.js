/* eslint-disable jsx-a11y/alt-text */

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


import Notification from "./components/Notification";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Product from "./pages/Product";

// import "../node_modules/react-animate-on-scroll/dist/scrollAnimation.min.css";
// // import "animate.css/animate.min.css";
function App() {
  const user = useSelector((state) => state.currentUser);
  return (
    <>
      {/* <Notification /> */}
      <Routes>
        <Route path="/"  element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
