import axios from 'axios';

export const productsListingAction=()=>{
    return async(dispatch)=>{
        
        
        try{
            dispatch({
                type : "PRODUCTS_LOADING"
            })
            let response=await axios.get('https://dummyjson.com/products')
            dispatch({
                type : "PRODUCTS_RETERIVE_SUCCESS",
                payload : response.data.products
            })
        }
        catch(err){

            dispatch({
                type :"PRODUCTS_RETERIVE_FAILURE",
                 
            })
        }

            
    }
}