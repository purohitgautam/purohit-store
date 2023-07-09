import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../contex/ProductContex'
import { AllInbox, LocalShippingOutlined, PublishedWithChanges, Security} from '@mui/icons-material'
import { useState } from 'react'
import Rating from './Rating'

const API = "https://api.pujakaitem.com/api/products"

export default function ProductDetail() {

  const {id} = useParams()
  const {dispatch, state: { productDetail, cart, isLoading} } = useProductContext()

  let {
    name,
    category,
    reviews,
    description,
    image = [{url: ''}],
    price,
    stars,
  } = productDetail;

  const[mainImage, setMainImage] = useState(0)

  const getProductDetail = async (url)=>{
    dispatch({type: 'SET_LOADING'})
    try {
      const data = await fetch(url)
      const productDetail = await data.json()
      dispatch({type: "SET_SINGLE_PRODUCT", payload: productDetail})
    } catch (error) {
      dispatch({type: 'SET_ERROR'})
    }
  }

  useEffect(() => {
    getProductDetail(`${API}?id=${id}`);
  }, []);
  
return (
  <>
  { isLoading ? <p className='loading'>Loading.......</p> :
  <div className='product-detail'>
    <div className="image">
      <div className="main-image">
        <img src={image[mainImage].url} alt={image.filename} />
      </div>
      <div className="all-images">
        {image.map( (currImg, index) => {
          return <div className="all-image" key={index}><img src={currImg.url} alt={currImg.filename} onClick={()=> setMainImage(index)} /></div>
        })}
      </div>
    </div>
    <div className="details">
      <span className="name">{name}</span>
      <div className="stars">
      <Rating stars={stars} rating={stars} />
      </div>
      <span>Total Reviews : {reviews}</span>
      <span className="price">MRP : {price}</span>
      <span className="category">category : {category}</span>
      <span className="description">{description}</span>
      <div className='service'>
        <div>
          <LocalShippingOutlined />
          <span>free delivery</span>
        </div>
        <div>
          <PublishedWithChanges />
          <span>30 day replacement</span>
        </div>
        <div>
          <AllInbox />
          <span>deliverd</span>
        </div>
        <div>
          <Security />
          <span>2 years warranty</span>
        </div>
      </div>
      {
        cart.some(p => p.id === id) ? (
          <button onClick={()=> dispatch({type: 'REMOVE_FROM_CART', payload: productDetail})} className='product-cart'>remove from cart</button>
        ) : (<button onClick={()=> dispatch({type: 'ADD_TO_CART', payload: productDetail})} className='product-cart'>add to cart</button>)
      }
    </div>
  </div> }
  </>
);
};