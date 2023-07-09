import React, { useRef, useState } from 'react'
import { useProductContext } from '../contex/ProductContex' 
import Product from './Product'
import Listview from './Listview'
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Filter from './Filter';

export default function Products() {

  const {state: {totalProducts}} = useProductContext()
  const [gridview, setGridview] = useState(true)
  const filterCheck = useRef()

  const {filterState : { sort, searchQuery, category }} = useProductContext()

  const sortProducts = ()=> {
    let sortedProducts = totalProducts;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => (
        sort === 'lowest' ? a.price - b.price : b.price - a.price
      ))
    }
    
    if (searchQuery) sortedProducts = sortedProducts.filter(prod => prod.name.toLowerCase().includes(searchQuery))
    
    if (category === 'mobile') sortedProducts = sortedProducts.filter(prod => prod.category === 'mobile')

    if (category === 'laptop') sortedProducts = sortedProducts.filter(prod => prod.category === 'laptop')

    if (category === 'computer') sortedProducts = sortedProducts.filter(prod => prod.category === 'computer')

    if (category === 'watch') sortedProducts = sortedProducts.filter(prod => prod.category === 'watch')

    if (category === 'accessories') sortedProducts = sortedProducts.filter(prod => prod.category === 'accessories')

    return sortedProducts
  }

  return (
    <div className='products'>
      <div className='filter-logo'><input type="checkbox" ref={filterCheck} /></div> 
      <div className="view-filters">
        <button 
         onClick={()=>{
          filterCheck.current.click()
          setGridview(!gridview)}}>
         {gridview ? <FormatListBulletedIcon /> : <ViewModuleIcon />}
        </button>
        <div><Filter /></div>
      </div>

      <div className={`filter-products ${!gridview ? 'listview-icon' : ''}`}>
        {sortProducts().map((product, index) =>{
          return gridview ? <Product product={product} key={product.id} /> : <Listview product={product} key={index} />
        })}
      </div>
    </div>
  )
}
