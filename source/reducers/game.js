import { NEW_GAME, ABORT_GAME } from "constants/actionTypes"

export default function gameReducer(state = "not_running", action) {
  switch(action.type) {
    case ABORT_GAME: {
      return "not_running"
    } break;
    case NEW_GAME: {
      return "running"
    } break;
    default:
      return state;
  }
}
