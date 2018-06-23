//@flow
import actionTypes from "./types"
import type { NewGameAction } from "./types"

export function newGame(tileId: number): NewGameAction {
  return {
    type: actionTypes.NEW_GAME,
    tileId
  }
}
