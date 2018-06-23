//@flow
import actionTypes from "./types"
import type { Action } from "./types"

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
