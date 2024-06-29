import { useEffect, useState } from "react"

const Question3=()=>{
   
    const [state,setstate]=useState({count :0})

    const increment=()=>{
        setstate(prevstate=>({
            count : prevstate.count+1
        }))
        setstate(prevstate=>{
          return  {count : prevstate.count+1}
        })

        // using the paraenthsis will ensure that arrow will return the object
        // if we are using the arrow funciton in updaterfun which is setstate we need to wrap the object in the paraenthsis , to aviod the abmigutity in js, here object literal and block of code looks similar.
    }

    return(
        <>
        <div>{state.count}</div>
        <button onClick={increment}> click</button>
        </>
    )
}

export default Question3