import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";

// Middleware
// const logger = reduxLogger.createLogger();

// Invoke the function and assign it to a constant
// takes an object as an argument and specify key called reducer
// in reducer we specify all the reducers from slices
// that belong to features
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // store adds middleware by default so we append our own
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
