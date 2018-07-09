// @flow
import { TOGGLE_SWITCH, NEW_GAME, ABORT_GAME, WIN_GAME } from "constants/actionTypes"
import { startingPatterns } from "constants/patterns"
import { RESTART_GAME } from "constants/actionTypes"
import checkPlayerWin from "game_logic/checkPlayerWin"


export type GameState = "not_running" | "running" | "victory";

export type SwitchesState = {
  tileId: number;
  switches: any;
  game: GameState;
}


export default function switchesReducer(
  state: SwitchesState = { tileId: 0, switches: [], game: "not_running" }, 
  action: Action
) {
  switch(action.type) {
    case WIN_GAME: {
      return Object.assign({}, state, { game: "victory" });
    };

    case ABORT_GAME: {
      return { switches: startingPatterns[0], tileId: 0, game: "not_running" }
    };

    case NEW_GAME: {
      const tileId = 1 + Math.floor(Math.random() * (startingPatterns.length - 1));

      return { switches: startingPatterns[tileId], tileId, game: "running" }
    };

    case RESTART_GAME: {
      return { switches: startingPatterns[state.tileId], tileId: state.tileId, game: "running" }
    }

    case TOGGLE_SWITCH: {
      if(state.game != "running") {
        return state;
      }

      const { row, column } = action.payload
      let game: GameState = state.game

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

      if(checkPlayerWin(switches)) {
        game = "victory"
      }

      return { switches, tileId: state.tileId, game }
    };
    default:
      return state;
  }
}
