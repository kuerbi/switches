import { TOGGLE_SWITCH, NEW_GAME, ABORT_GAME, RESTART_GAME } from "constants/actionTypes"

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

// TODO: Test it
export function toggleSwitchIfGameIsRunning(row, column) {
  return (dispatch, getState) => {
    const { game } = getState();

    if(game != "running") {
      return;
    };

    dispatch(toggleSwitch(row,column));
  }
}

export function toggleSwitch(row, column) {
  return {
    type: TOGGLE_SWITCH,
    payload: { row, column }
  };
}
