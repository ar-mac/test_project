import { combineReducers } from 'redux'
import locationReducer from './location'
import todoReducer from './reducers/todo';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    todos: todoReducer,
    ...asyncReducers
  })
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
