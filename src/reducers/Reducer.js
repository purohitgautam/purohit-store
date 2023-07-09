

const reducer = (state, action) =>{

    switch (action.type) {
        case 'SET_LOADING':
            return{
                ...state,
                isLoading: true
            }
        case 'SET_API_DATA':

            const featureData = action.payload.filter((data)=>{
                return data.featured === true
            })

            return{
                ...state,
                isLoading: false,
                totalProducts: action.payload,
                featureProducts: featureData
            }
            
            case "SET_SINGLE_PRODUCT":
                return {
                    ...state,
                    isLoading: false,
                    productDetail: action.payload,
                }
    
            case "API_ERROR":
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                };

            case "ADD_TO_CART":
                return{
                    ...state,
                    cart: [...state.cart, {...action.payload, qty:1}]
                }

            case "REMOVE_FROM_CART":
                return{
                    ...state,
                    cart: state.cart.filter(c => c.id !== action.payload.id)
                }

            case "CHANGE_CART_QTY":
                return{
                    ...state,
                    cart: state.cart.filter(c => c.id === action.payload.id ? c.qty = action.payload.qty : c.qty)
                }

            
        default: return state
    }
}

const filterReducer = (state, action) => {
    switch (action.type) {

        case 'SORT_BY_PRICE':
            return {
                ...state,
                sort: action.payload,
            }

        case 'FILTER_BY_SEARCH':
            return {
                ...state,
                searchQuery: action.payload
            }

        case 'FILTER_BY_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
    
        default: return state
    }
}

 export { reducer, filterReducer }
