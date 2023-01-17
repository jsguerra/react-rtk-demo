import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

// Slice accept an object for an argument
// Specify 3 properties: name, initialState, reducers object
// createSlice automatically creates action creators with the same names
// as the reducer functions we have written (ordered and restocked)
const cakeSlice = createSlice({
  name: "cake",
  initialState, // ES6 shorthand if key and value are the same
  reducers: {
    // specify the individtual state transitions
    ordered: (state) => {
      // we can directly mutate the state
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

// createSlide also returns the main reducer function which we can provide
// to our redux store
// default export
export default cakeSlice.reducer;
// named export
export const { ordered, restocked } = cakeSlice.actions;

/* This slice effectively takes care of defining an action type constant, an action object, an action creator, the switch statements in the reducer and handling immutable updates in the reducer. */