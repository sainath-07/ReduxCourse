import { useDispatch, useSelector } from "react-redux"
import { actionDecrement, actionIncrement } from "../redux/action"

const Counterapp=()=>{

    const data=useSelector(state=>state.data)
    console.log(data)


    const dispatch=useDispatch()
    const INCREMENT=()=>{
        dispatch(actionIncrement())
    }
    const DECREMENT=()=>{
        dispatch(actionDecrement())
    }
    return(
        <>
        <h1>Counter :{data}</h1>
        <button onClick={INCREMENT}>INCREMENT</button>
        <button onClick={DECREMENT}>DECREMENT</button>
        </>
    )

}

export default Counterapp