//@flow
type AbortGameAction = { type: "game/abort_game" }
type NewGameAction = { type: "game/new_game", tileId: number }
type RestartGameAction = { type: "game/restart_game" }
type ToggleTileAction = { type: "game/toggle_tile", row: number, column: number }
type HasWonGameAction = { type: "game/win_game" }
type IncrementCounterAction = { type: "game/increment_counter" }


export type Action = 
  | AbortGameAction
  | NewGameAction
  | RestartGameAction
  | ToggleTileAction
  | HasWonGameAction
  | IncrementCounterAction

const ABORT_GAME = "game/abort_game"
const INCREMENT_COUNTER = "game/increment_counter"
const NEW_GAME = "game/new_game"
const RESTART_GAME = "game/restart_game"
const TOGGLE_TILE = "game/toggle_tile"
const HAS_WON_GAME = "game/win_game"

export default {
  ABORT_GAME,
  INCREMENT_COUNTER,
  NEW_GAME,
  RESTART_GAME,
  TOGGLE_TILE,
  HAS_WON_GAME,
}
