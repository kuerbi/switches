//@flow
import actionTypes from "./types"
import type { Action } from "./types"

export function incrementCounter(): Action {
  return {
    type: actionTypes.INCREMENT_COUNTER
  }
}

export function newGame(tileId: number): Action {
  return {
    type: actionTypes.NEW_GAME,
    tileId
  }
}

export function restartGame(): Action {
  return {
    type: actionTypes.RESTART_GAME
  }
}

export function toggleTile(row: number, column: number): Action {
  return {
    type: actionTypes.TOGGLE_TILE,
    row,
    column
  }
}

export function abortGame(): Action {
  return {
    type: actionTypes.ABORT_GAME
  }
}

export function hasWonGame(): Action {
  return {
    type: actionTypes.HAS_WON_GAME
  }
}
