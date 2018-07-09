//@flow
import switchesReducer from "reducers/switches"
import counterReducer from "reducers/counter"

import { combineReducers } from "redux"
import type { CounterState } from "reducers/counter"
import type { SwitchesState } from "reducers/switches"


export type AppState = {
  fields: SwitchesState;
  counter: CounterState
}

const rootReducer = combineReducers({
  fields: switchesReducer,
  counter: counterReducer
});

export default rootReducer;
