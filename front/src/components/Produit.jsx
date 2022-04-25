import React from "react";
import {Link } from "react-router-dom";

function Produit({product}) {
  return (
    <div className="produit-con">
        <Link to={`/produit/${product._id}`}>

      <img
        src={"http://localhost:4000/public/"+product.img}
        alt=""
      />
      <div>
        <h3>{product.title}</h3>
        <p>${product.price} USD</p>
      </div>
    </Link>
      </div>
  );
}

export default Produit;
