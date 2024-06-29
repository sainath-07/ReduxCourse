import { useEffect, useState } from "react"

const Question5=()=>{

            const [count,setcount]=useState(0)
            

            useEffect(()=>{
                const timer=setInterval(() => {


                    // setcount(count+1)
                    setcount(count=>count+1)    
                    setcount(count=>count+1)
                }, 1000);

                return ()=>clearInterval(timer)
            },[])


            // to update the above state value contiously we can pass the value in the empty dependecny value
            // or we can use this count=>count+1 functional form 

//             Functional Form in React State Updates:
// In React, when you want to update state based on its previous value (especially in asynchronous scenarios like setInterval, setTimeout, etc.), it's crucial to use the functional update form to ensure that you are working with the most up-to-date state.
      
    return(
        <>
        <h1>{count}</h1>
        </>
    )
}

export default Question5