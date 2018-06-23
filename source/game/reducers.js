//@flow
import actionTypes from "./types"
import type { Action } from "./types"
import type { NewGameAction } from "./types"
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
    default:
      return state;
  }
}
