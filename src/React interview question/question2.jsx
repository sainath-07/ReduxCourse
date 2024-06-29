import { useEffect, useState } from "react";

const Question2=()=>{

    const [text,settext]=useState("Hello")

    const handleclick=()=>{
        settext(text+"world")
        settext("react")
    }

    return(
        <>
        <div > {text}</div>
        <button onClick={handleclick}>click</button>
        </>
    )

}
export default Question2;


// usestate is a Asynchoronus hook but there are executed in the order they are mentioned. 