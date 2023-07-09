import React from 'react'
import { useProductContext } from '../contex/ProductContex'
import { Delete, Star } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Cart() {

    const {state: { cart }, dispatch } = useProductContext()

    const [total, setTotal] = useState()

    useEffect(()=>{
        setTotal(cart.reduce((accu, curr) => accu + Number(curr.price) * curr.qty ,0))
    }, [cart])
    
  return (
    <div className="cart">
        <div className="cart-items">
            {
                cart.length > 0 ?
                (cart.map((prod, index) => {
                    return <div className="cart-item" key={index}>
                                <div className="image">
                                    <img src={prod.image[0].url} alt={prod.image[0].filename} style={{height: '50px', borderRadius: '5px'}} />
                                </div>
                                <div className="details">
                                    <p>{prod.name}</p>
                                    <p>MRP: {prod.price}</p>
                                    <p className='stars-align'><Star />{prod.stars}</p>
                                    <div className='quantity'>
                                        <span>qty:</span>
                                        <select onChange={(e)=> dispatch({type: 'CHANGE_CART_QTY', payload:{id: prod.id, qty: e.target.value}})}>
                                            {[...Array(prod.stock).keys()].map(x => {
                                                return <option key={x + 1}>{x + 1}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div onClick={()=> dispatch({type:'REMOVE_FROM_CART', payload: prod})} className='delete'><Delete /></div>
                            </div>
                })) : <span>cart is empty ....</span>
            }
        </div>
        <div className="cart-details">
            <span>total items : {cart.length}</span>
            <span>total amount : {total}</span>
            <button>proceed</button>
        </div>
    </div>
  )
}
