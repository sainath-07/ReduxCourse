import { memo } from "react"

const Child=(prop)=>{
    console.log("Children prop...")
    return(
        <>

        <h1>{prop.count}</h1>
        <button onClick={prop.handlesetcount2}>Child</button>
        </>
    )
}

// export default Child
export default memo(Child)