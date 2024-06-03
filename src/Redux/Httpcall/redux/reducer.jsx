let initialState={
    products : [],
    error : null,
    loading : false
}


export const httpcallreducer=(state=initialState,action)=>{
       switch(action.type){
             case "PRODUCTS_RETERIVE_SUCCESS" :
                return {...state,products : action.payload,loading : false}
             case "PRODUCTS_RETERIVE_FAILURE" :
                return {...state,error:"Something went wrong..."}
             case "PRODUCTS_LOADING" :
                return {...state,loading:true}
               default :
                 return state
       }
}