import { useEffect, useState } from "react";

const Question1=()=>{

    const [count,setcount]=useState(null)

    useEffect(()=>{
     setcount(count+5)
    },[])

    
   useEffect(()=>{
    setcount(count+100)
   },[])

    return(
        <>
        <div >count : {count}</div>
        </>
    )

}
export default Question1;