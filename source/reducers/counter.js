import { TOGGLE_SWITCH, NEW_GAME } from "constants/actionTypes"

export default function counterReducer(state = 0, action) {
  switch(action.type) {
    case NEW_GAME: {
      return 0;
    } break;
    case TOGGLE_SWITCH: {
      return state + 1
    } break;
    default:
      return state;
  }
}
