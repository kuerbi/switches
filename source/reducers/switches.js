import { TOGGLE_SWITCH } from "constants/actionTypes"

export default function switchesReducer(state = [], action) {
  switch(action.type) {
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
