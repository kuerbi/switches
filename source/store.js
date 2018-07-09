//@flow
import { createStore, applyMiddleware } from "redux"
import { startingPatterns } from "constants/patterns"
import reducer from "reducers"
import type { AppState } from "reducers"

const initialState: AppState = {
  fields: {
    tileId: 0,
    switches: startingPatterns[0],
    game: "not_running"
  },
  counter: 0
}

const store = createStore(
  reducer,
  initialState
);

export default store
