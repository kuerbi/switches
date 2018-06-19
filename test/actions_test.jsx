import { expect } from "chai"

import { toggleSwitch, newGame } from "actions"
import { TOGGLE_SWITCH, NEW_GAME } from "constants/actionTypes"

describe("Actions", () => {
  it("handle TOGGLE_SWITCH", () => {
    const row = 2;
    const column = 3;
    
    expect(toggleSwitch(row, column)).to.deep.equal({
      type: TOGGLE_SWITCH,
      payload: { row, column }
    });
  });

  it("handle NEW_GAME", () => {
    expect(newGame()).to.deep.equal({
      type: NEW_GAME
    });
  });
});
