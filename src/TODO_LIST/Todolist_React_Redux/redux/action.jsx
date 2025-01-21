export const ADDTODO = (text) => {
  return {
    type: `ADDTODO`,
    payload: text,
  };
};
export const SETTEXT = (text) => {
  return {
    type: `SETTEXT`,
    payload: text,
  };
};

export const DELETETODO = (id) => {
  return {
    type: `DELETETODO`,
    payload: id,
  };
};
export const EDITTODO = (text, todoid) => {
  return {
    type: `EDITTODO`,
    payload: text,
    todoid: todoid,
  };
};
export const UPDATETODO = (text) => {
  return {
    type: `UPDATETODO`,
    payload: text,
  };
};
