import { expect } from "chai"
import gameReducer from "reducers/game"
import switchesReducer from "reducers/switches"
import counterReducer from "reducers/counter"
import { newGame, toggleSwitch, playerWins } from "actions"

describe("Game reducer", () => {
  it("should return initial state", () => {
    expect(gameReducer(undefined, {})).equal("not_running");
  });

  it("should handle NEW_GAME", () => {
    expect(gameReducer("not_running", newGame())).equal("running");
  });

  it("should handle WIN_GAME", () => {
    expect(gameReducer("not_running", playerWins())).equal("victory");
  });
});

describe("Switches reducer", () => {
  const state1 = {
    tileId: 1,
    switches: [
      [0,0,0,0,0],
      [0,1,1,1,0],
      [0,1,0,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0]
    ]
  }

  it("should handle TOGGLE_SWITCH", () => {
    // todo: we need more test cases especially from the corners
    const newState1 = switchesReducer(state1, toggleSwitch(1,1));

    expect(newState1.switches).eql([
      [0,1,0,0,0],
      [1,0,0,1,0],
      [0,0,0,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0]
    ]);

    expect(switchesReducer(newState1, toggleSwitch(1,1)).switches).eql([
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

describe("counter reducer", () => {
  it("should handle TOGGLE_SWITCH increment values", () => {
    expect(counterReducer(0, toggleSwitch())).equal(1);
    expect(counterReducer(1, toggleSwitch())).equal(2);
  });

  it("should handle NEW_GAME reset the counter", () => {
    expect(counterReducer(4, newGame())).equal(0);
  });
});
