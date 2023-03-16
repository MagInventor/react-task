import React from 'react'
// import classes from './Catalogcard.module.css'

import img1 from '../../../assets/catalog/1.jpg'
import like from '../../../assets/icons/like.png'

const CatalogCard = () => {
  return (
    <div className="product-card">
      <div className="product-card_img">
        <img src={img1} alt="img" />
        <span className="product-card_img__like">
          <img src={like} />
        </span>
      </div>
      <div className="product-card__info">
        <div className="product-card__info_price">
          <div className="product-card__container">
            <h2>$10,000,000</h2>
            <p>Guide Price</p>
          </div>
        </div>
        <div className="product-card__info_title">
          <div className="product-card__container">
            <h3>5 bedroom apartment ...</h3>
            <p>Eaton Square, London</p>
          </div>
        </div>
        <div className="product-card__container">
          <button 
            type="button"
            className="product-card__info_cart" 
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export {CatalogCard}