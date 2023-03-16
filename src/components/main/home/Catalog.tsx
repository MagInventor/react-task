import React, { Component } from 'react'
import { ProductCard } from './Productcard'

import img1 from '../../../assets/catalog/1.jpg'
import img2 from '../../../assets/catalog/2.jpg'
import img3 from '../../../assets/catalog/3.jpg'

const PRODUCTS = [
  {
    id: 1,
    name: 'House 1',
    price: 32000000,
    imageUrl: img1,
    description: '6 bedroom end of terrace house',
    address: 'Wilton Mews, London'
  },
  {
    id: 2,
    name: 'House 1',
    price: 'POA',
    imageUrl: img2,
    description: '8 bedroom for sale',
    address: 'Queen Anne\'s Gate, London'
  },
  {
    id: 3,
    name: 'House 1',
    price: 30000000,
    imageUrl: img3,
    description: '5 bedroom for sale',
    address: 'Eaton Square, London'
  },
]

interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
  description: string
  address: string
}

interface CatalogProps {
  products: Product[]
}

class Catalog extends Component<CatalogProps, CatalogState> {
  constructor(props: CatalogProps) {
    super(props)
  }

  render() {
    const { products } = this.props

    return (
      <div className="product-list">
        {PRODUCTS.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    )
  }
}

export {Catalog}
