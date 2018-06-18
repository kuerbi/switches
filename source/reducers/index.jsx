import switchesReducer from "reducers/switches"
import gameStateReducer from "reducers/gameState"

import { combineReducers } from "redux"

const rootReducer = combineReducers({
    gameState: gameStateReducer,
    switches: switchesReducer
});

export default rootReducer;
