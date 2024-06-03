
let initialstate={
    cart : [],
    toggle : false
}

export const cartReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "ADD_TO_CART" : 
        const userAddedId=action.payload.id

        const alreadyInCart=state.cart.find((each,index)=>each.id==userAddedId)
        if(alreadyInCart){
            return state
        }else{

            return {...state,cart :[...state.cart,action.payload]}
        }

        // const checkidincart=state.cart.
        case "DELETE_FROM_CART" :
            const id=action.payload
            const cartfilter=state.cart.filter((each,index)=>each.id!==id)
            return {...state,cart:cartfilter}
        default : 
        return state
    }
     
}