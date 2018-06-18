import { expect } from "chai"

import { toggleSwitch } from "actions"
import { TOGGLE_SWITCH } from "constants/actionTypes"

describe("Actions", () => {
  it("handles TOGGLE_SWITCH", () => {
    const row = 2;
    const column = 3;
    
    expect(toggleSwitch(row, column)).to.deep.equal({
      type: TOGGLE_SWITCH,
      payload: { row, column }
    });
  });
});
