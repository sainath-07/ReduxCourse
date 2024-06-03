import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productsListingAction } from "../redux/action"

const Httpcall=()=>{

       const reduxstate=useSelector(state=>state)


       const dispatch=useDispatch()

       useEffect(()=>{
         dispatch(productsListingAction())
       },[])

    return(
        <>
        </>
    )
}

export default Httpcall