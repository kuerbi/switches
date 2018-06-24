//@flow
import actionTypes from "./types"
import type { Action } from "./types"
import { templates as tileTemplates } from "tiles"
import type { Tiles } from "tiles"

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
    case actionTypes.INCREMENT_COUNTER: {
      const counter = state.counter + 1;

      return { ...state, counter: counter }
    }
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
      return { 
        ...state,
        gameState: "running",
        counter: 0,
        tiles: tileTemplates[state.currentTileId]
      }
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
    case actionTypes.ABORT_GAME: {
      return { 
        gameState: "not_running", 
        tiles: tileTemplates[0], 
        currentTileId: 0, 
        counter: 0 
      }
    }
    case actionTypes.HAS_WON_GAME: {
      function checkWon(): boolean {
        for(let r = 0; r < state.tiles.length; r++) {
          for(let c = 0; c < state.tiles[0].length; c++) {
            if(state.tiles[r][c] === 0) {
              return false;
            }
          }
        }
    
        return true;
      }

      return checkWon() ? { ...state, gameState: "victory" } : state;
    }
    default:
      return state;
  }
}
