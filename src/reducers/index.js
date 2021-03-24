import { combineReducers } from 'redux';
import {user }from './user';
export const reduceReducers = (...reducers) => {
  return (previous, current) => 
  reducers.reduce(
    (p,r) => r(p, current),
    previous
  )
}

const combinedReducer = combineReducers({
  userInfo: user,

});

const rootReducer = reduceReducers(
  combinedReducer,
)

export default rootReducer;