import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./reducer"
import  thunkMiddleware  from "redux-thunk"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //esta linea es para conectar con la extension del navegador => REDUX DEVTOOLS

const store = createStore(
  rootReducer, 
  composeEnhancer(applyMiddleware(thunkMiddleware))  // esta linea es para poder hacer peticiones asincronas a react Redux (a un server)
)

export default store;