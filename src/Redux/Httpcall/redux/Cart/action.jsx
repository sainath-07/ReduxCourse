export const AddToCart=(Eachproduct)=>{
    return {
        type :"ADD_TO_CART",
        payload : Eachproduct
    }
}
export const DeleteCart=(id)=>{
    return {
        type :"DELETE_FROM_CART",
        payload : id
    }
}