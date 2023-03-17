import React, { Component } from 'react'
import { Product } from './Product'
import { ProductCard } from './ProductCard'
import { DataStore } from '../../../store/DataStore'

interface CatalogProps {
  dataStore: DataStore
}

class Catalog extends Component<CatalogProps> {
  constructor(props: CatalogProps) {
    super(props)
  }

  render() {
    const { dataStore } = this.props
    const products = new DataStore().getProducts()

    return (
      <div className="product-list">
        {products.map(product => (
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
