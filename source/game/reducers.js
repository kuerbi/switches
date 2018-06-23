//@flow
import actionTypes from "./types"
import type { Action } from "./types"
import { templates as tileTemplates } from "./tiles"
import type { Tiles } from "./tiles"

export type State = {
  +gameState: "not_running" | "running" | "victory",
  +currentTileId: number,
  +counter: number,
  +tiles: Tiles,
}

export const initialState: State = {
  gameState: "not_running",
  currentTileId: 0,
  counter: 0,
  tiles: tileTemplates[0],
}

export default function reducer(state: State = initialState, action: Action): State {
  switch(action.type) {
    case actionTypes.NEW_GAME: {
      const currentTileId = action.tileId;

      return {
        ...state, 
        gameState: "running",
        currentTileId,
        tiles: tileTemplates[currentTileId]
      };
    }
    case actionTypes.RESTART_GAME: {
      return { ...state, tiles: tileTemplates[state.currentTileId], counter: 0 }
    }
    case actionTypes.TOGGLE_TILE: {
      const newTiles: Tiles = state.tiles.map((rows, rowIndex) => rows.map((columns, columnIndex) => {
        if((rowIndex === action.row && columnIndex === action.column) ||
          (rowIndex-1 === action.row && columnIndex === action.column) ||
          (rowIndex+1 === action.row && columnIndex === action.column) ||
          (rowIndex === action.row && columnIndex+1 === action.column) ||
          (rowIndex === action.row && columnIndex-1 === action.column)) {
            return (columns === 0) ? 1:0;
        }

        return columns;
      }));

      return { ...state, tiles: newTiles }
    }
    default:
      return state;
  }
}
