//@flow
import chai from "chai"
import reducer, { initialState } from "../reducers"
import * as actions from "../actions"
import { templates as tileTemplates } from "tiles"

const expect = chai.expect;

describe("Reducers", () => {
  it("should handle NEW_GAME", () => {
    const newState = reducer(initialState, actions.newGame(2));
    
    expect(newState.gameState).equal("running");
    expect(newState.currentTileId).equal(2);
  });

  it("should handle RESTART_GAME", () => {
    const newState = reducer({
      gameState: "running",
      currentTileId: 1,
      counter: 5,
      tiles: [[0]],
    }, actions.restartGame());

    expect(newState.counter).equal(0);
    expect(newState.tiles).eql(tileTemplates[1]);
  });

  it("should handle TOGGLE_TILE", () => {
    const newState = reducer({
      gameState: "running",
      currentTileId: 1,
      counter: 5,
      tiles: [
        [0,1,0,0,0],
        [1,0,0,1,0],
        [0,0,0,1,0],
        [0,1,1,1,0],
        [0,0,0,0,0]
      ]
    }, actions.toggleTile(2, 3));

    expect(newState.tiles).eql([
      [0,1,0,0,0],
      [1,0,0,0,0],
      [0,0,1,0,1],
      [0,1,1,0,0],
      [0,0,0,0,0]
    ]);
  });

  it("should handle ABORT_GAME", () => {
    const newState = reducer({
      gameState: "running",
      currentTileId: 1,
      counter: 5,
      tiles: [
        [0,1,0,0,0],
        [1,0,0,1,0],
        [0,0,0,1,0],
        [0,1,1,1,0],
        [0,0,0,0,0]
      ]
    }, actions.abortGame());

    expect(newState).eql({
      gameState: "not_running",
      currentTileId: 0,
      counter: 0,
      tiles: [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]
      ]
    })
  });

  it("should handle WIN_GAME", () => {
    let newState = reducer({
      gameState: "running",
      currentTileId: 2,
      counter: 20,
      tiles: [
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1]
      ]
    }, actions.hasWonGame());

    expect(newState.gameState).equals("victory");

    newState = reducer({
      gameState: "running",
      currentTileId: 2,
      counter: 20,
      tiles: [
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,0]
      ]
    }, actions.hasWonGame());

    expect(newState.gameState).equals("running");
  });
})
