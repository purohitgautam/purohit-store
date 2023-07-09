import React from 'react'
import { Link } from 'react-router-dom'

export default function Listview({product}) {
  return (
    <div className='listview'>
      <Link to={`/productdetail/${product.id}`}>
        <div className="image">
          <img src={product.image} alt="listviewImage" />
        </div>
      </Link>
      <div className="details">
      <span className="name">{product.name}</span>
      <span className="category">category: {product.category}</span>
      <span className="company">company: {product.company}</span>
      <span className="price">MRP: Rs.{product.price}</span>     
      <span className="stock">{product.stock} in stocks</span>
      {product.shipping && <span className="shipping">free shipping</span>}
      {/* <span className="description">{product.description}</span> */}
        </div>
    </div>
  )
}
