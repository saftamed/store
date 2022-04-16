/* eslint-disable jsx-a11y/alt-text */
import Cart from "./pages/Cart";
import CategorieProduit from "./pages/CategorieProduit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProduitDet from "./pages/ProduitDet";
import Register from "./pages/Register";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";
// import "../node_modules/react-animate-on-scroll/dist/scrollAnimation.min.css";
// // import "animate.css/animate.min.css";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user===null?<Login />:<Navigate replace  to="/"/>} />
      <Route path="/register" element={user===null?<Register />:<Navigate replace  to="/"/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/produit/:id" element={<ProduitDet />} />
      <Route path="/produits/:cat" element={<CategorieProduit />} />
    </Routes>
  );
}

export default App;
