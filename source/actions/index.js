import { TOGGLE_SWITCH, NEW_GAME } from "constants/actionTypes"

export function newGame() {
  return {
    type: NEW_GAME
  }
}

export function toggleSwitch(row, column) {
  return {
    type: TOGGLE_SWITCH,
    payload: { row, column }
  }
}
