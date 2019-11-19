import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { promiseMiddleware } from 'promise-middleware-redux';


export default createStore(
  reducer,
  applyMiddleware(
    promiseMiddleware)

);
