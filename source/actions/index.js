import { 
  TOGGLE_SWITCH, 
  NEW_GAME, 
  ABORT_GAME, 
  RESTART_GAME, 
  PLAYER_WINS
} from "constants/actionTypes"

export function newGame() {
  return {
    type: NEW_GAME
  }
}

export function abortGame() {
  return {
    type: ABORT_GAME
  }
}

export function restartGame() {
  return {
    type: RESTART_GAME
  }
}

export function move(row, column) {
  return (dispatch, getState) => {
    if(getState().game != "running") return;
    
    dispatch(toggleSwitch(row, column));
  }
}

export function toggleSwitch(row, column) {
  return {
    type: TOGGLE_SWITCH,
    payload: { row, column }
  };
}

export function playerWins() {
  return {
    type: PLAYER_WINS
  }
}
