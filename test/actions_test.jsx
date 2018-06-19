import { expect } from "chai"

import { toggleSwitch, newGame, abortGame, restartGame } from "actions"
import { TOGGLE_SWITCH, NEW_GAME, ABORT_GAME, RESTART_GAME } from "constants/actionTypes"

describe("Actions", () => {
  it("toggleSwitch", () => {
    const row = 2;
    const column = 3;
    
    expect(toggleSwitch(row, column)).to.deep.equal({
      type: TOGGLE_SWITCH,
      payload: { row, column }
    });
  });

  it("newGame", () => {
    expect(newGame()).to.deep.equal({
      type: NEW_GAME
    });
  });

  it("abortGame", () => {
    expect(abortGame()).to.deep.equal({
      type: ABORT_GAME
    });
  });

  it("restartGame", () => {
    expect(restartGame()).to.deep.equal({
      type: RESTART_GAME
    });
  });

});
