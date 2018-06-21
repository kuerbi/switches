//@flow
import { NEW_GAME, ABORT_GAME, WIN_GAME, RESTART_GAME } from "constants/actionTypes"

export type GameState = "not_running" | "running" | "victory";

export default function gameReducer(state: GameState = "not_running", action: Action) {
  switch(action.type) {
    case WIN_GAME: {
      return "victory"
    };
    case ABORT_GAME: {
      return "not_running"
    };
    case NEW_GAME:
    case RESTART_GAME: {
      return "running"
    };
    default:
      return state;
  }
}
