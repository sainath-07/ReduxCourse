import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productsListingAction } from "../redux/action"

const Httpcall=()=>{

       const reduxstate=useSelector(state=>state)
       const {products:{products}} =reduxstate
       const {products:{loading}} =reduxstate
       console.log(reduxstate,"reduxstate")


       const dispatch=useDispatch()

       useEffect(()=>{
         dispatch(productsListingAction())
       },[])

    return(
        <>
        <h1>Httpcall</h1>

        {
            loading ?
            <h1>Please wait For some time.......</h1>
            :
       
        <div className="d-flex flex-wrap gap-3 justify-content-center">
        {
            products.map((each,index)=>{
                  return(
                    <React.Fragment key={index}>
                    <div className="border border-2 flex-wrap border-danger">
                     <img src={each.thumbnail} width={"250px"} height={"300px"} alt="" />
                    <p className="text-center">{each.category}</p>
                    </div>
                    </React.Fragment>
                  )
            })
        }
        </div> 
         }
        </>
    )
}

export default Httpcall