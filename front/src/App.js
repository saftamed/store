/* eslint-disable jsx-a11y/alt-text */
import Cart from "./pages/Cart";
import CategorieProduit from "./pages/CategorieProduit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProduitDet from "./pages/ProduitDet";
import Register from "./pages/Register";

import { Routes, Route, Link } from "react-router-dom";

import "./style.css";
// import "../node_modules/react-animate-on-scroll/dist/scrollAnimation.min.css";
// // import "animate.css/animate.min.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<Cart />} />
      <Route path="produit/:id" element={<ProduitDet />} />
      <Route path="produits/:cat" element={<CategorieProduit />} />
    </Routes>
  );
}

export default App;
