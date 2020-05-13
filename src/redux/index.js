// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "../saga";
// const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware];
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// sagaMiddleware.run(rootSaga);
// export default store;
import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer";
import rootSaga from "../saga";
// const composeEnhancers = (process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null)
//   || compose;

const sagaMiddleware = createSagaMiddleware();
// const middleware = [thunk, sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;
