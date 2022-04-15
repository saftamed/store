import React from 'react'
import { useSelector } from 'react-redux'
import CartProduit from '../components/CartProduit'
import Nav from '../components/Nav'

function Cart() {
    const cart = useSelector((state) => state.cart);
    return (
    <>
        <Nav/>
        <div className="cart">
          <h1>YOUR CART        </h1>
          <div className="content">
              <div className="items">
                  {
                        cart.products.map(item => <CartProduit key={item._id} item={item}/>)
                  }
              </div>
              <div className="checkout">
                  <h2>ORDER SUMMARY</h2>
                  <div className="sum">
                      <span>SubTotal</span>
                      <span>$45.99</span>
                  </div>
                  <div className="sum">
                      <span>Estimaed Shipping</span>
                      <span>$8</span>
                  </div>
                  <div className="sum">
                      <span>Taxes</span>
                      <span>$45.99</span>
                  </div>
    
                  <div className="sum">
                      <span>Shippin Discount</span>
                      <span>$5.99</span>
                  </div>
                  <div className="sum totf">
                      <span>Total</span>
                      <span>${Math.abs((cart.total).toFixed(2))}</span>
                  </div>
                  <div className="btn">
                      Check Out
                  </div>

              </div>
          </div>
      </div>
    </>
  )
}

export default Cart