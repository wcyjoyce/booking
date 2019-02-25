const flatsReducer = (state, action) => {
  if (state === undefined) {
    return []
  }

  if (action.type === "SET_FLATS") {
    return action.payload;
  } else {
    return state; // return previous state
  }
}

export default flatsReducer;
