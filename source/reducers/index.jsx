//@flow
import switchesReducer from "reducers/switches"
import gameReducer from "reducers/game"
import counterReducer from "reducers/counter"

import { combineReducers } from "redux"
import type { GameState } from "reducers/game"
import type { CounterState } from "reducers/counter"
import type { SwitchesState } from "reducers/switches"


export type AppState = {
  game: GameState;
  fields: SwitchesState;
  counter: CounterState
}

const rootReducer = combineReducers({
  game: gameReducer,
  fields: switchesReducer,
  counter: counterReducer
});

export default rootReducer;
