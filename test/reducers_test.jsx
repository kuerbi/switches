import { expect } from "chai"
import gameReducer from "reducers/game"
import { newGame } from "actions"

describe("game reducer", () => {
  it("should return initial state", () => {
    expect(gameReducer(undefined, {})).equal("not_running");
  });

  it("should handle NEW_GAME", () => {
    console.log(newGame());
    expect(gameReducer("not_running", newGame())).equal("running");
  });
});
