import switchesReducer from "reducers/switches"
import gameReducer from "reducers/game"

import { combineReducers } from "redux"

const rootReducer = combineReducers({
    game: gameReducer,
    fields: switchesReducer
});

export default rootReducer;
