//@flow
import chai from "chai"
import reducer, { initialState } from "../reducers"
import { newGame } from "../actions"

const expect = chai.expect;

describe("Reducers", () => {
  it("should handle NEW_GAME", () => {
    const newState = reducer(initialState, newGame(2));
    
    expect(newState.gameState).equal("running");
    expect(newState.currentTileId).equal(2);
  });
})
