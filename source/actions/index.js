import { 
  TOGGLE_SWITCH, 
  NEW_GAME, 
  ABORT_GAME, 
  RESTART_GAME, 
  WIN_GAME
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

    function checkPlayerWin(switches: any): boolean {
      for(let r = 0; r < switches.length; r++) {
        for(let c = 0; c < switches[0].length; c++) {
          if(switches[r][c] === 0) {
            return false;
          }
        }
      }
  
      return true;
    }
    
    dispatch(toggleSwitch(row, column));

    if(checkPlayerWin(getState().fields.switches)) dispatch(playerWins());
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
    type: WIN_GAME
  }
}
