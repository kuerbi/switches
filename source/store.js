//@flow
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { startingPatterns } from "constants/patterns"
import reducer from "reducers"
import type { AppState } from "reducers"

const initialState: AppState = {
  game: "not_running",
  fields: {
    patternId: 0,
    switches: startingPatterns[0]
  },
  counter: 0
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
);

export default store
