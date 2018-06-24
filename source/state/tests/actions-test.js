//@flow
import { expect } from "chai"
import * as actions from "../actions"
import actionTypes from "../types"

describe("Actions", () => {
  it("should create an action to start the game", () => {
    expect(actions.newGame(2)).eql({
      type: actionTypes.NEW_GAME,
      tileId: 2
    });
  });

  it("should create an action to restart the game", () => {
    expect(actions.restartGame()).eql({
      type: actionTypes.RESTART_GAME
    });
  });

  it("should create an action to toggle a tile by row and column", () => {
    const column = 4;
    const row = 2;

    expect(actions.toggleTile(row,column)).eql({
      type: actionTypes.TOGGLE_TILE,
      row,
      column
    })
  });

  it("should create an action to abort the game", () => {
    expect(actions.abortGame()).eql({
      type: actionTypes.ABORT_GAME
    })
  });

  it("should create an action to has won the game?", () => {
    expect(actions.hasWonGame()).eql({
      type: actionTypes.HAS_WON_GAME
    });
  });

  it("should create an action to increment counter", () => {
    expect(actions.incrementCounter()).eql({
      type: actionTypes.INCREMENT_COUNTER
    });
  });
});
