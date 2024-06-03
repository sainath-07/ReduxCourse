let initialState={
    profile :{
        name : "Hello",
        email : "Hello@gmail.com",
        phoneNumber : 90105565
    }
}

export const profileReducer=(state=initialState,action)=>{
           switch(action.type){
                    case "PROFILE_INFO_CHANGE" :
                        return {...state,profile:action.payload}
                    default :
                     return state
           }
       
}