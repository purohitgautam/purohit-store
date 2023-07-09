import React from 'react'
import { useProductContext } from '../contex/ProductContex'

export default function Filter() {
    const {filterState : { sort }, filterDispatch} = useProductContext()
  return (
    <div className='filters'>
      <input type="search" id='search' onChange={e => filterDispatch({type:'FILTER_BY_SEARCH', payload: e.target.value})} />
        <div className="lowest">
          <span>Lowest</span>
          <input type="radio" name="sort" id="lowest" onChange={()=>filterDispatch({type: 'SORT_BY_PRICE', payload: 'lowest'})} checked={sort === 'lowest' ? true : false} />
        </div>
        <div className="highest">
          <span>highest</span>
          <input type="radio" name="sort" id="highest" onChange={()=>filterDispatch({type: 'SORT_BY_PRICE', payload: 'highest'})} checked={sort === 'highest' ? true : false} />
        </div>
        <select onChange={(e)=> filterDispatch({type: 'FILTER_BY_CATEGORY', payload:e.target.value})}>
          <option value="categories">categories (All)</option>
          <option value="mobile">mobile</option>
          <option value="laptop">laptop</option>
          <option value="computer">computer</option>
          <option value="watch">watch</option>
          <option value="accessories">accessories</option>
        </select>
    </div>
  )
}