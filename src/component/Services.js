import React from 'react'
import Product from './Product'
import { useProductContext } from '../contex/ProductContex'

export default function Services() {
  const {state: {featureProducts, isLoading}} = useProductContext()
  return (
    <div className='services'>
      <h3>Our Services</h3>

        <div className="feature-services">
          <h4>Feature Products</h4>
          {isLoading ? <p className='loading'>Loading.......</p> : 
          <div className="feature-products">
            {featureProducts.map(product => {
              return <Product product={product} key={product.id} />
            })}
          </div>}
        </div>
        <div className="other-services">
            
        </div>
    </div>
  )
}
