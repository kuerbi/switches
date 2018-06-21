//@flow
import switchesReducer from "reducers/switches"
import gameReducer from "reducers/game"
import counterReducer from "reducers/counter"

import { combineReducers } from "redux"

export type AppState = {
  game: string;
  fields: any;
  counter: any;
}

const rootReducer = combineReducers({
  game: gameReducer,
  fields: switchesReducer,
  counter: counterReducer
});

export default rootReducer;
