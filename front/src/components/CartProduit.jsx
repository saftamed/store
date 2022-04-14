import React from 'react'

function CartProduit() {
  return (
    <div className="item">
    <div className="pro">
        <img src="https://cdn.shopify.com/s/files/1/0058/4538/5314/products/Stealth40ozV2-1-2000pxForWeb-26_240x.jpg?v=1632941643" alt=""/>
    </div>
    <div className="details">
      <h3>INSULATED WATER BOTTLE</h3>
      <p>40OZ / STEALTH</p>
      <p>$29.99 USD</p>
    </div>
    <div className="tot">
      <p>PRICE USD</p>
      <div className="price">$29.99 USD</div>
      <div className="qte">
         <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
         </button>
          <span>1</span>
       <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
       </button>

      </div>
      <button>Remove</button>
    </div>
</div>
  )
}

export default CartProduit