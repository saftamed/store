import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import ProduitList from "../components/ProduitList";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import { useParams } from "react-router";
function ProduitDet() {
  const [product, setProduct] = useState(null);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState("s");
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/product/find/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      });
  }, []);

  return (
    <>
      <Nav />
      {product && (
        <div className="pcontainer flex-d-c">
          <div className="img">
            <img
              src={product.img}
              alt=""
            />
          </div>
          <div className="info">
            <h1>{product.title}</h1>
            <div className="colors">
              <h3>PICK COLOR: {product.colors[color].name}</h3>
              <div>
                {product.colors?.map((c, index) => (
                  <div
                    key={index}
                    className={index === color ? "borders" : ""}
                    style={{ backgroundColor: c.name }}
                    onClick={() => setColor(index)}
                  ></div>
                ))}
              </div>
            </div>
            {
              product.colors[color].sizes &&
            <><div className="sizes">
              <h3>PICK SIZE: {size} </h3>
              <div>
                {Object.entries(product.colors[color].sizes).map(
                  ([sizeName, value]) => (
                    <div
                      key={sizeName}
                      className={sizeName === size ? "sles" : ""}
                      onClick={() => setSize(sizeName)}
                    >
                      {sizeName}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="detai">
              <details>
                <summary>SIZE GUIDE</summary>

                <img src="/img/sizes.png" alt="" />
              </details>

            </div>
            </>
            }
            <div className="detai">
                <details>
                <summary>PRODUCT INFORMATION</summary>
                <br />
                {product.desc}
              </details>
              </div>
            <div className="add__cart">
              <div>
                <button type="submit">Add to cart</button>
              </div>

              <div>
                <span>${product.price} USD</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <ScrollAnimation animateIn="fadeIn">

      <ProduitList title={"OUR FAVORITES"}/>
</ScrollAnimation> */}
    </>
  );
}

export default ProduitDet;
