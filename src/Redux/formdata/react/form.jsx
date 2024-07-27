import { useDispatch, useSelector } from "react-redux";
import { formaction } from "../redux/action";

const Formdata=()=>{


  const data=useSelector(state=>state)
  console.log(data,"data")


  const dispatch=useDispatch()

     const handlerusername=(e)=>{
      dispatch(formaction(e.target.value))
     }

    return(
        <>
          <input type="text"
          value={data.username}
          onChange={handlerusername}
           />
        </>
    )
}



export default Formdata;