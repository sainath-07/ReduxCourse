import React, { useState } from "react";

const Data = () => {
  const [text, settext] = useState("");
  const [todolist, settodolist] = useState([]);
  const [isfalse,setisfalse]=useState(false)
  const [check,setcheck]=useState(null)

  const handletext = (e) => {
    settext(e.target.value);
  };
  const addtodo = () => {
    settodolist([...todolist, text]);
  };
  const clearall = () => {
    settodolist([]);
  };
 

  const deletetodo=(i)=>{
     const filterdata=todolist.filter((ele,index)=>i!==index)
     settodolist(filterdata)
  }

  const updatenewtodo=()=>{
    setisfalse(false)
    const mapdataa=todolist.map((ele,i)=>{
        if(i===check){
            return text
        }
        else{
               return ele
        }
    })

    settodolist(mapdataa)
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handletext}
        className="m-3 w-50"
      />

      {
        isfalse?

        <button onClick={updatenewtodo}>update new todo</button>:
        <button onClick={addtodo}>Add todo</button>

      }
      <button onClick={clearall}>Delete todo</button>

      <div>
        {todolist.map((ele, i) => {
          return (
            <React.Fragment key={i}>
              <div className="border border-dark">
                <h1 className="fs-1 d-inline mx-3">{ele}</h1>
                <button onClick={()=>deletetodo(i)}>Delete</button>
                <button onClick={()=>{
                     setisfalse(true)
                     setcheck(i)
                     settext(ele)
                }}>update</button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Data;
