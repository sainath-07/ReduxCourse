let initialvalue={
    username : ""
}

export const formactionReducer=(state=initialvalue,action)=>{
    switch(action.type){
        case "USERNAME":
            return {...state,username:action.payload};
            default : return state
    }

}