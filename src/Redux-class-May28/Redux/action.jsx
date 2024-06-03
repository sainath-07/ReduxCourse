// ActionCreator function which retunr action, action is object.

export const actionReducer=(data)=>{
       return {
        type :"PROFILE_INFO_CHANGE",
        payload : data

       }
}