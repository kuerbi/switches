import { NEW_GAME } from "constants/actionTypes"

export default function gameReducer(state = "not_running", action) {
  switch(action.type) {
    case NEW_GAME: {
      return "running"
    } break;
    default:
      return state;
  }
}
