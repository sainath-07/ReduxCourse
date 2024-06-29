import { useState } from "react"

const Question4=()=>{
    const [count,setcount]=useState(0)

    const handleclick=()=>{
        setcount(count+1)

        setTimeout(() => {
            alert(count)
        }, 1000);

    }


    // alert pop up will be shown on the every click it always shows the previous value
    // it form the closure 

    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleclick}>click</button>
        </>
    )
}

export default Question4