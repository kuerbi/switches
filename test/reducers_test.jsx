import { expect } from "chai"
import gameReducer from "reducers/game"
import switchesReducer from "reducers/switches"
import { newGame, toggleSwitch } from "actions"

describe("game reducer", () => {
  it("should return initial state", () => {
    expect(gameReducer(undefined, {})).equal("not_running");
  });

  it("should handle NEW_GAME", () => {
    expect(gameReducer("not_running", newGame())).equal("running");
  });
});

describe("switches reducer", () => {
  const state1 = [
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [0,0,0,0,0]
  ];

  it("should handle TOGGLE_SWITCH", () => {
    // todo: we need more test cases especially from the corners
    const newState1 = switchesReducer(state1, toggleSwitch(1,1));

    expect(newState1).eql([
      [0,1,0,0,0],
      [1,0,0,1,0],
      [0,0,0,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0]
    ]);

    expect(switchesReducer(newState1, toggleSwitch(1,1))).eql([
      [0,0,0,0,0],
      [0,1,1,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0]
    ]);
  });

  // TODO: Mmmm improve this please
  it("should handle NEW_GAME", () => {
    const newState = switchesReducer(state1, newGame());

    expect(newState).not.eql([]);
  });
});
