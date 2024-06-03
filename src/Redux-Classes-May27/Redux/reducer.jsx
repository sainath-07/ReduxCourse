let initialState={
    count : 100
}


export const reducerBookFunction=(state=initialState,action)=>{
         switch(action.type){
           case "Buy_Book":
             return {...state,count : state.count-1}
           case "RETURN_BOOK":
            return {...state,count : state.count+1}
            default : 
             return state
         }
}