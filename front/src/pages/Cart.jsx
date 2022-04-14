import React from 'react'
import CartProduit from '../components/CartProduit'
import Nav from '../components/Nav'

function Cart() {
  return (
    <>
        <Nav/>
        <div className="cart">
          <h1>YOUR CART        </h1>
          <div className="content">
              <div className="items">
                 <CartProduit/>
                 <CartProduit/>
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
                      <span>$95.99</span>
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