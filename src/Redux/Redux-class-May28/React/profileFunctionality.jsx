import { useDispatch, useSelector } from "react-redux"
import actionReducer from "../Redux/action"
import { useState } from "react"

const ProfileFunctionality=()=>{
              
    let data ={
        name: "",
        email :"",
        phoneno :""
    }
                const [userdetails,setuserdetails]=useState(data)

    // useSelector is a hook which allows us to extract data from redux to react layer
         const profileStore=useSelector(state=>state)
        //  console.log(profileStore)

         const {name,email,phoneNumber}=profileStore.profile.profile
         const {count}=profileStore.bookcount

         console.log(profileStore)
          

         const dispatch=useDispatch()
         
         
       
            // Form handling functions

            const handleusername=(e)=>{
               let res= e.target.value
               setuserdetails({...userdetails,name:res})
            }

            const handleuseremail=(e)=>{
               let res=e.target.value
               setuserdetails({...userdetails,email : res})
            }

            const handleuserphoneno=(e)=>{
                let res=e.target.value
                setuserdetails({...userdetails,phoneno :res})
            }

                

            const updateProfileDetails=()=>{
                dispatch(actionReducer(
                    {
                        name : userdetails.name,
                        email : userdetails.email,
                        phoneNumber : userdetails.phoneno
                    }
                ))
             }

             
            // const updateProfileDetails=()=>{
            //     dispatch(actionReducer(
            //         {
            //             name : "sainath",
            //             email : "sainath@gmail.com",
            //             phoneNumber : 9010995222
            //         }
            //     ))
            //  }
    return(
        <>

        <form>
            <input type="text" className="mb-2"  value={userdetails.name} onChange={handleusername}  placeholder="userName"/>
            <br />
            <input type="text" className="mb-2"   value={userdetails.email} onChange={handleuseremail}   placeholder="Email"/>
            <br />
            <input type="text"  className="mb-2"  value={userdetails.phoneNumber} onChange={handleuserphoneno} placeholder="PhoneNumber" />
        </form>
        <button onClick={updateProfileDetails}>update profile details</button>
        <h1>Profile Info</h1>
        <h3>name : {name}</h3>
        <h3>email : {email}</h3>
        <h3>phoneNumber : {phoneNumber}</h3>


        <hr />
        <h1>Count : {count}</h1>
        
        </>

    )
}

export default ProfileFunctionality