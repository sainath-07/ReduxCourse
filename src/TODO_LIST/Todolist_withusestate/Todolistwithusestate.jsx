import React, { useState } from "react";

const Todolistwithusestate = () => {
  const [todo, settodo] = useState([]);
  const [text, settext] = useState(``);
  const [toggle, settoggle] = useState(false);
  const [id, setid] = useState(``);
  const handletext = (e) => {
    settext(e.target.value);
  };
  const handletodo = () => {
    settodo([...todo, text]);
    settext(``);
  };

  const handledelete = (id) => {
    let filterdata = todo.filter((_, todoid) => todoid !== id);
    settodo(filterdata);
  };

  const handleedit = (data, id) => {
    settext(data);
    settoggle(true);
    setid(id);
  };

  const updatetodo = () => {
    let updateddata = todo.map((eachtodo, index) => {
      if (index === id) {
        return text;
      } else {
        return eachtodo;
      }
    });
    settext(``);
    settodo(updateddata);
    settoggle(false);
  };
  return (
    <>
      <input
        onChange={handletext}
        type="text"
        value={text}
        placeholder="enter the text"
      />

      {toggle ? (
        <button onClick={updatetodo}>update todo</button>
      ) : (
        <button onClick={handletodo}>Add todo</button>
      )}
      {todo.length > 0 ? (
        Array.isArray(todo) &&
        todo.map((each, index) => (
          <React.Fragment key={index}>
            <p>
              {index + 1}
              {each}
            </p>
            <button onClick={() => handledelete(index)}>delete</button>
            <button onClick={() => handleedit(each, index)}>update</button>
          </React.Fragment>
        ))
      ) : (
        <p>No todos</p>
      )}
    </>
  );
};

export default Todolistwithusestate;
