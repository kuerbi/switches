import { expect } from "chai"
import configureStore from "redux-mock-store"

import { toggleSwitch, newGame, abortGame, restartGame, move, playerWins } from "actions"
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


describe("move action", () => {
  const mockStore = configureStore([]);

  // TODO
  // describe("when game is not running", () => {
  //   it("do nothing", () => {
  //     const initialState = {
  //       fields: {
  //         tileId: 0,
  //         switches: [[1]],
  //         game: "not_running"
  //       },
  //     };

  //     store.dispatch(move(0,0));

  //     expect(store.getActions()).eql([]);
  //   });
  // });

  describe("when game is running", () => {
    it("dispatch toggleSwitch action", () => {
      const initialState = {
        game: "running",
        fields: {
          tileId: 0,
          switches: [
            [0,0,0,0,0],
            [0,1,1,1,0],
            [0,1,0,1,0],
            [0,1,1,1,0],
            [0,0,0,0,0]
          ]
        }
      };
  
      const store = mockStore(initialState);
      store.dispatch(move(2,2));

      expect(store.getActions()).eql([
        toggleSwitch(2,2)
      ]);
    });
  });
});
