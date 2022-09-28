import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import rootReducer from "./Reducer/rootReducer";
import createSagaMiddleware from "redux-saga";
import productSaga from "./productSaga";
const sagamiddware=createSagaMiddleware();


const store=configureStore({reducer:rootReducer,
                            middleware:()=>[sagamiddware]
});
sagamiddware.run(productSaga)
export default store;

