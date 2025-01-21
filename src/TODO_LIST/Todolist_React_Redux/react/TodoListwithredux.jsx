import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADDTODO,
  DELETETODO,
  EDITTODO,
  SETTEXT,
  UPDATETODO,
} from "../redux/action";

const TodoListwithredux = () => {
  const dispatch = useDispatch();
  const { text, todo, todoId } = useSelector((state) => state);

  // console.log(`todo`, todo);
  console.log(`text`, text);

  const handleinput = (e) => {
    dispatch(SETTEXT(e.target.value));
  };

  const handleaddtodo = () => {
    dispatch(ADDTODO(text));
  };
  const handledelete = (todoid) => {
    dispatch(DELETETODO(todoid));
  };
  const handleedittodo = (text, todoid) => {
    dispatch(EDITTODO(text, todoid));
  };
  const handleUpdate = (text) => {
    dispatch(UPDATETODO(text));
  };
  return (
    <>
      <input type="text" value={text} onChange={handleinput} />

      {todoId ? (
        <button onClick={() => handleUpdate(text)}>updateTodo</button>
      ) : (
        <button onClick={handleaddtodo}>addtodo</button>
      )}
      {todo.length > 0 ? (
        todo.map((todo, index) => {
          return (
            <React.Fragment key={index}>
              <div>{todo}</div>
              <button onClick={() => handledelete(index + 1)}>delete</button>
              <button onClick={() => handleedittodo(todo, index + 1)}>
                edit
              </button>
            </React.Fragment>
          );
        })
      ) : (
        <div>no todos</div>
      )}
    </>
  );
};

export default TodoListwithredux;
