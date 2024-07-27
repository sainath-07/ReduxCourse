import { useState } from "react";

const Checkbox = () => {
  const arr = ["play cricket", "paly video game", "read book"];
  const [dummy, setdummy] = useState(arr);
  

  const handledelete = (data) => {
    console.log(data);
    const filterdata = dummy.filter((ele, i) => ele !== data);
    setdummy(filterdata);
  };

  const handlecheckbox=(ele)=>{
        console.log(ele)
  }

  return (
    <div>
      {dummy.map((ele, i) => {
        return (
          <div key={i}>
            <input type="checkbox"
             onChange={()=>handlecheckbox(ele)} 
            />
            <span >{ele}</span>
            
            <button onClick={() => handledelete(ele)}>delete</button>
            
          </div>
        );
      })}
    </div>
  );
};

export default Checkbox;
