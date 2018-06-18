import { TOGGLE_SWITCH } from "constants/actionTypes"

export function toggleSwitch(row, column) {
  return {
    type: TOGGLE_SWITCH,
    payload: { row, column }
  }
}
