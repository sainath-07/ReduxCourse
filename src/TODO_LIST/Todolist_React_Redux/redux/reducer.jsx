let initialstate = {
  todo: [],
  text: ``,
  todoId: ``,
};

export const reducerfunction = (state = initialstate, action) => {
  switch (action.type) {
    case `ADDTODO`:
      return {
        ...state,
        todo: [...state.todo, action.payload],
        text: ``,
      };
    case `SETTEXT`:
      return {
        ...state,
        text: action.payload,
      };
    case `DELETETODO`:
      let filterdata = state.todo.filter(
        (todo, index) => index + 1 !== action.payload
      );

      return {
        ...state,
        todo: filterdata,
      };
    case `EDITTODO`:
      return {
        ...state,
        text: action.payload,
        todoId: action.todoid,
      };
    case `UPDATETODO`:
      let updatedata = state.todo.map((todo, index) => {
        if (index + 1 == state.todoId) {
          return action.payload;
        } else {
          return todo;
        }
      });

      return {
        ...state,
        todo: updatedata,
        todoId: ``,
        text: ``,
      };

    default:
      return state;
  }
};
