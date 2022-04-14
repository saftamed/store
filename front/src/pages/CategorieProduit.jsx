import React from 'react'
import Nav from '../components/Nav'
import ProduitList from '../components/ProduitList'

function CategorieProduit() {
  return (
    <>
        <Nav/>
        <h1>Categorie Produit</h1>
        <div className="filter">
            <div className="f">
                <span>Filter Products:</span>
                <select>
                    <option disabled selected>
                      Color
                    </option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Green</option>
                  </select>
                  <select>
                    <option disabled selected>
                      Size
                    </option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
            </div>
            <div className="sort">
                <span>Sort Products:</span>
                <select>
                    <option selected>Newest</option>
                    <option>Price (asc)</option>
                    <option>Price (desc)</option>
                  </select>
            </div>
          </div>

          <ProduitList/>
    </>
  )
}

export default CategorieProduit