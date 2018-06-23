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
});
