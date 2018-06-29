import axios from "axios";
import{ 
    GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE,
    ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE,
    DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE,
    UPDATE_PRODUCT, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE
} from '../constants/action-types';


export function fetchProducts() {
    return (dispatch) => {
       dispatch({ type: GET_PRODUCTS });       
        axios.get('http://localhost:5001/product/fetch-products')
          .then((res) =>{
              dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res });
          })
          .catch((error)=> {
              dispatch({ type: GET_PRODUCTS_FAILURE, payload: error });
          })
    }
}


export function updateProdruct(id, nameProduct, categoryProduct, dateExpire, priceProduct) {
    return (dispatch) => {
       dispatch({ type: UPDATE_PRODUCT });
        axios.put(`http://localhost:5001/product/update-product/${id}`, {
            nameProduct: nameProduct,
            categoryProduct: categoryProduct,
            dateExpire: dateExpire,
            priceProduct: priceProduct
        })   
          .then((res) =>{
              dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res });
          })
          .catch((error)=> {
              dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error });
          })
    }
}


export function addProduct(nameProduct, categoryProduct, dateExpire, priceProduct) {
    return (dispatch) => {
       dispatch({ type: ADD_PRODUCT });
        axios.post('http://localhost:5001/product/add-product', {
            nameProduct: nameProduct,
            categoryProduct: categoryProduct,
            dateExpire: dateExpire,
            priceProduct: priceProduct
        })   
          .then((res) =>{
              dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res });
          })
          .catch((error)=> {
              dispatch({ type: ADD_PRODUCT_FAILURE, payload: error });
          })
    }
}


export function deleteProduct(id) {
    return (dispatch) => {
       dispatch({ type: DELETE_PRODUCT });
       axios.delete(`http://localhost:5001/product/${id}`)   
          .then((res) =>{
              dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: res });
          })
          .catch((error)=> {
              dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error });
          })
    }
}