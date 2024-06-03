import { useDispatch, useSelector } from "react-redux"
import {returnBook} from "../Redux/action.jsx"
import {buyBook} from "../Redux/action.jsx"

const BookcountFunctionality=()=>{



    //  Middleware hooks

    
    // useSelector extracts the data from redux to react 
      const reduxstate=useSelector((state)=>state)
      const {count}=reduxstate


    //   usedispatch allows us to trigger an action.
     const dispatch=useDispatch()

     const buyBookFunction=()=>{
         dispatch(buyBook())
     }
     const returnBookFunction=()=>{
         dispatch(returnBook())
     }

    return(
       <>
         <h1>count : {count}</h1>
         <button onClick={buyBookFunction}>BuyBook</button>
         <button onClick={returnBookFunction}>ReturnBook</button>
       </>
    )
}

export default BookcountFunctionality