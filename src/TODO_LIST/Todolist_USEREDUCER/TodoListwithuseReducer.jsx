import React, { useReducer, useState } from "react";

const TodoListwithuseReducer = () => {
  let initialstate = {
    todo: [],
    text: ``,
    todoId: ``,
  };

  const reduderfunction = (state = initialstate, action) => {
    switch (action.type) {
      case `ADDTODO`:
        return {
          ...state,
          todo: [...state.todo, state.text],
          text: ``,
        };
      case `SETTEXT`:
        return {
          ...state,
          text: action.payload,
        };
      case `DELETETODO`:
        let filtertodo = state.todo.filter(
          (_, todo) => todo !== action.payload
        );
        return {
          ...state,
          todo: filtertodo,
        };
      case `UPDATETEXT`:
        return {
          ...state,
          text: action.payload,
          todoId: action.todoId,
        };
      case `EDITEDTEXT`:
        let udpatedata = state.todo.map((todo, todoid) => {
          if (todoid + 1 == state.todoId) {
            return action.payload;
          } else {
            return todo;
          }
        });
        return {
          ...state,
          todo: udpatedata,
          text: ``,
        };
    }
  };

  const [currentvalue, dispatch] = useReducer(reduderfunction, initialstate);
  const handleinput = (e) => {
    dispatch({
      type: `SETTEXT`,
      payload: e.target.value,
    });
  };

  const handleaddtodo = () => {
    dispatch({
      type: `ADDTODO`,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: `DELETETODO`,
      payload: id,
    });
  };

  const updatetext = (text, todoId) => {
    dispatch({
      type: `UPDATETEXT`,
      payload: text,
      todoId: todoId,
    });
  };

  const handleedittext = (text) => {
    dispatch({
      type: `EDITEDTEXT`,
      payload: text,
    });
  };

  return (
    <>
      <input type="text" value={currentvalue.text} onChange={handleinput} />
      {currentvalue.todoId ? (
        <button onClick={() => handleedittext(currentvalue.text)}>
          {" "}
          Update todo
        </button>
      ) : (
        <button onClick={handleaddtodo}>add Update</button>
      )}
      {currentvalue.todo.length > 0 ? (
        currentvalue.todo.map((each, index) => {
          return (
            <React.Fragment key={index}>
              <div>{each}</div>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => updatetext(each, index + 1)}>
                update
              </button>
            </React.Fragment>
          );
        })
      ) : (
        <p>No todos</p>
      )}
    </>
  );
};

export default TodoListwithuseReducer;
