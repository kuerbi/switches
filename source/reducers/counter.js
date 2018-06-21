//@flow
import { TOGGLE_SWITCH, NEW_GAME, RESTART_GAME } from "constants/actionTypes"

export type CounterState = number;

export default function counterReducer(state: CounterState = 0, action: Action) {
  switch(action.type) {
    case NEW_GAME:
    case RESTART_GAME: {
      return 0;
    };
    case TOGGLE_SWITCH: {
      return state + 1
    };
    default:
      return state;
  }
}
