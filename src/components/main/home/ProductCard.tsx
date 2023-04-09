import React from 'react'
import like from '../../../assets/icons/like.png'
import Product from './Product'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [productPrice, setProductPrice] = React.useState<string>('POA')
  const [guidePrice, setGuidePrice] = React.useState<string>('')

  React.useEffect(() => {
    if (typeof product.price === 'number' && product.price !== 0) {
      setProductPrice(`$${product.price}`)
      setGuidePrice('Guide Price')
    }
  }, [product.price])

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

export default ProductCard
