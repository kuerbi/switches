// @flow
import { TOGGLE_SWITCH, NEW_GAME, ABORT_GAME } from "constants/actionTypes"
import { startingPatterns } from "constants/patterns"
import { RESTART_GAME } from "../constants/actionTypes"

export type SwitchesState = {
  patternId: number;
  // todo: switches: Array<Array<Number>>
  switches: any
}

export default function switchesReducer(
  state: SwitchesState = { patternId: 0, switches: [] }, 
  action: Action
) {
  switch(action.type) {
    case ABORT_GAME: {
      return { switches: startingPatterns[0], patternId: 0 }
    };

    case NEW_GAME: {
      const patternId = 1 + Math.floor(Math.random() * (startingPatterns.length - 1));

      return { switches: startingPatterns[patternId], patternId }
    };

    case RESTART_GAME: {
      return { switches: startingPatterns[state.patternId], patternId: state.patternId }
    }

    case TOGGLE_SWITCH: {
      const { row, column } = action.payload

      const switches = state.switches.map((rows, rowIndex) => rows.map((columns, columnIndex) => {
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

      return { switches, patternId: state.patternId }
    };
    default:
      return state;
  }
}
