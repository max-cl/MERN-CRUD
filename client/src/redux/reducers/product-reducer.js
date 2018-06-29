import{ 
    GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE,
    ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE,
    DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE,
    UPDATE_PRODUCT, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE
  } from '../constants/action-types';
  
  const initialState = {
      products: [],
      loading: false,
      loaded: false,
      error: null,
      edited: false
    }
    
  
    export default (state = initialState, action) => {
      const payload = action.payload
    
       switch (action.type) {
        case GET_PRODUCTS:    
          return {
            ...state,
            loading: true,
            loaded: false
          }
  
        case GET_PRODUCTS_SUCCESS:
          return {
            ...state,
            products: payload.data,
            loading: false,
            loaded: true,
            error: null,
            edited: false
          }   
  
        case GET_PRODUCTS_FAILURE:
          return {
            ...state,
            loading: false,
            loaded: true,
            error: payload
          }      
        
          case ADD_PRODUCT:    
          return {
            ...state,
            loading: true,
            loaded: false
          }
  
        case ADD_PRODUCT_SUCCESS:
          return {
            ...state,
            products: state.products.concat(payload.data),
            loading: false,
            loaded: true,
            error: null
          }   
  
        case ADD_PRODUCT_FAILURE:
          return {
            ...state,
            loading: false,
            loaded: true,
            error: payload
          }      
  
          case DELETE_PRODUCT:    
          return {
            ...state,
            loading: true,
            loaded: false
          }
  
        case DELETE_PRODUCT_SUCCESS:
          return {
            ...state,
            products: state.products.filter(product => { return product._id !== payload.data.id }),
            loading: false,
            loaded: true,
            error: null
          }   
  
        case DELETE_PRODUCT_FAILURE:
          return {
            ...state,
            loading: false,
            loaded: true,
            error: payload
          }          

          case UPDATE_PRODUCT:    
          return {
            ...state,
            loading: true,
            loaded: false
          }
  
        case UPDATE_PRODUCT_SUCCESS:
          return {
            ...state,
            products: state.products.map( product => { return product._id === payload.data._id ? payload.data : product } ),
            loading: false,
            loaded: true,
            error: null,
            edited: true
          }   
  
        case UPDATE_PRODUCT_FAILURE:
          return {
            ...state,
            loading: false,
            loaded: true,
            error: payload
          }
  
        default:
          return state
      }
    }