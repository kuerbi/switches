import { expect } from "chai"
import gameReducer from "reducers/game"

describe("game reducer", () => {
  it("should return initial state", () => {
    expect(gameReducer(undefined, {})).equal("not_running");
  });
});
