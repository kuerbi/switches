import React from "react"
import { expect } from "chai"
import checkPlayerWin from "game_logic/checkPlayerWin"


describe("checkPlayerWin", () => {
  it("should return true when every field is 1", () => {
    const expected = checkPlayerWin([
      [1,1,1,1,1],
      [1,1,1,1,1],
      [1,1,1,1,1],
      [1,1,1,1,1],
      [1,1,1,1,1]
    ]);

    expect(expected).eq(true)
  });

  it("should return false when one field is 0", () => {
    const expected = checkPlayerWin([
      [1,1,1,1,1],
      [1,1,1,1,1],
      [1,1,1,1,1],
      [1,1,1,1,1],
      [1,1,1,1,0]
    ]);

    expect(expected).eq(false)
  });
});
