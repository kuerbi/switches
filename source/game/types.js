//@flow
export type NewGameAction = { type: string, tileId: number }

export type Action = 
  | NewGameAction;

const ABORT_GAME = "game/abort_game"
const NEW_GAME = "game/new_game"
const RESTART_GAME = "game/restart_game"
const TOGGLE_TILE = "game/toggle_tile"
const WIN_GAME = "game/win_game"

export default {
  ABORT_GAME,
  NEW_GAME,
  RESTART_GAME,
  TOGGLE_TILE,
  WIN_GAME,
}
