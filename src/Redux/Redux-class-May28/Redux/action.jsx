// ActionCreator function which retunr action, action is object.

const actionReducer=(data)=>{
       return {
        type :"PROFILE_INFO_CHANGE",
        payload : data

       }
}

export default actionReducer