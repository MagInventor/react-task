import React, { useEffect, useState } from 'react'
import Product from './Product'
import ProductCard from './ProductCard'
import DataStore from '../../../store/DataStore'
import './Catalog.css'

interface CatalogProps {
  dataStore: DataStore
}

function Catalog({ dataStore }: CatalogProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchedProducts = new DataStore().getProducts();
    setProducts(fetchedProducts);
  }, [dataStore]);

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

export default Catalog