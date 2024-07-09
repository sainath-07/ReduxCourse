import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const Password=()=>{
    const [password,setpassword]=useState(true)

    return(

        <>
       <div>
        <input type={password ? 'password': "text"} placeholder="Password" style={{
            position : "relative",
            paddingLeft: "35px"
        }}/>

        {
            password?
            <>

            <EyeOff style={{
                position:"absolute",
                // border:"2px solid red",
                left : "5px"
            }} 
        
            onClick={()=>{
                setpassword(!password)
            }}/>

            </>
            :
            <>
       <Eye style={{
                position:"absolute",
                // border:"2px solid red",
                left : "5px"
            }}  onClick={()=>{
                setpassword(!password)
            }} />

            </>
        }

        
    
       </div>
        </>
    )

}
export default Password