//@flow

type AbortGameAction = { type: "game/abort_game" }
type NewGameAction = { type: "game/new_game", tileId: number }
type RestartGameAction = { type: "game/restart_game" }
type ToggleTileAction = { type: "game/toggle_tile", row: number, column: number }

export type Action = 
  | AbortGameAction
  | NewGameAction
  | RestartGameAction
  | ToggleTileAction

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
