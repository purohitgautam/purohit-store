import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({product}) {
  return (
    <div className='product'>
        <div className="image">
            <Link to={`/productdetail/${product.id}`}>
            <img src={product.image} alt="productImage" />
            </Link>
        </div>
        <span className="name">{product.category}</span>
        <div className="details">
            <span className="name">{product.name}</span>
            <span className="price">{product.price}</span>
            {/* <span>{product.company}</span>
            <span>{product.description}</span> */}
        </div>
    </div>
  )
}