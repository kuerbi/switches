import switchesReducer from "reducers/switches"
import gameReducer from "reducers/game"
import counterReducer from "reducers/counter"

import { combineReducers } from "redux"

const rootReducer = combineReducers({
  game: gameReducer,
  fields: switchesReducer,
  counter: counterReducer
});

export default rootReducer;
