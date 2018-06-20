import { NEW_GAME, ABORT_GAME, WIN_GAME } from "constants/actionTypes"

export default function gameReducer(state = "not_running", action) {
  switch(action.type) {
    case WIN_GAME: {
      return "victory"
    } break;
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
