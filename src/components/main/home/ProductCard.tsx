import React, { Component } from 'react'
// import classes from './Catalogcard.module.css'
import like from '../../../assets/icons/like.png'
import { Product } from './Product'

interface ProductCardProps {
  product: Product
}

class ProductCard extends Component<ProductCardProps> {
  constructor(props: ProductCardProps) {
    super(props)
  }

  render() {
    const { product } = this.props
    const productPrice = typeof product.price === 'number' && product.price !== 0 
      ? `$${product.price}` 
      : 'POA'
    const guidePrice = typeof product.price === 'number' && product.price !== 0 ? 'Guide Price' : ''

    return (
      <div className="product-card">
        <div className="product-card_img">
          <img src={product.imageUrl} alt={product.name} />
          <span className="product-card_img__like">
            <img src={like} />
          </span>
        </div>
        <div className="product-card__info">
          <div className="product-card__info_price">
            <div className="product-card__container">
              <h2>{productPrice}</h2>
              <p>{guidePrice}</p>
            </div>
          </div>
          <div className="product-card__info_title">
            <div className="product-card__container">
              <h3>{product.description} ...</h3>
              <p>{product.address}</p>
            </div>
          </div>
          <div className="product-card__container">
            <button 
              type="button"
              className="product-card__info_cart"
            >
              Buy a house
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export {ProductCard}