import { TOGGLE_SWITCH, NEW_GAME, ABORT_GAME } from "constants/actionTypes"
import { startingPatterns } from "constants/patterns"

export default function switchesReducer(state = [], action) {
  switch(action.type) {
    case ABORT_GAME: {
      return startingPatterns[0];
    } break;

    case NEW_GAME: {
      const r = 1 + Math.floor(Math.random() * (startingPatterns.length - 1));

      return startingPatterns[r];
    } break;

    case TOGGLE_SWITCH: {
      const { row, column } = action.payload

      return state.map((rows, rowIndex) => rows.map((columns, columnIndex) => {
        if(
          (rowIndex === row && columnIndex === column) ||
          (rowIndex-1 === row && columnIndex === column) ||
          (rowIndex+1 === row && columnIndex === column) ||
          (rowIndex === row && columnIndex+1 === column) ||
          (rowIndex === row && columnIndex-1 === column)) {
            return (columns + 1) % 2
        }

        return columns;
      }));
    } break;
    default:
      return state;
  }
}
