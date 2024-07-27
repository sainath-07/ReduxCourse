let initialvalue = {
  data: 100,
};

const reducercounterfunction = (state = initialvalue, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, data: state.data + 1 };
    case "DECREMENT":
      return { ...state, data: state.data - 1 };
      default:
            return state;
  }
};

export default reducercounterfunction;
