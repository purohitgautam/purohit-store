import React, { createContext, useContext, useEffect, useReducer } from 'react'
// import axios from "axios";
import {reducer, filterReducer} from '../reducers/Reducer'

const AppContext = createContext()

const API = "https://api.pujakaitem.com/api/products"



const AppProvider = ({children})=>{


const [state, dispatch] = useReducer(reducer, {
  isLoading: false,
  isError: false,
  totalProducts: [],
  featureProducts: [],
  productDetail: {},
  cart: []
})
  
const getProducts = async (url)=>{
  dispatch({type: 'SET_LOADING'})
  try {
    const data = await fetch(url)
    const totalProducts = await data.json()
    dispatch({type: "SET_API_DATA", payload: totalProducts})
  } catch (error) {
    dispatch({type: 'SET_ERROR'})
  }
}


useEffect(() => {
  getProducts(API)
}, [])


const [filterState, filterDispatch] = useReducer(filterReducer, {
  lowToHigh: false,
  highToLow: false,
  category: 'all', 
  searchQuery: ""
})


  return (
  <AppContext.Provider value={{state, dispatch, filterState, filterDispatch}}>
      {children}
  </AppContext.Provider>
  )
}

const useProductContext = ()=>{

  return useContext(AppContext)
}
export {AppProvider, useProductContext, AppContext}
