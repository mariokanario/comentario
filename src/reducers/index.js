import {legacy_createStore} from 'redux'
import commentReducer from './reducers'

const store = legacy_createStore(commentReducer)

export default store;

// import { legacy_createStore,applyMiddleware } from "redux";
// import  commentReducer  from "./reducers";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunkMiddleware from "redux-thunk";


// export const store = legacy_createStore(
//     commentReducer,
//     composeWithDevTools(applyMiddleware(thunkMiddleware)),
// );

// export default store;