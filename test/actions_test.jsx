import { expect } from "chai"
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"

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
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  describe("when game is not running", () => {
    it("dispatch nothing", () => {
      const initialState = {
        game: "not_running",
        fields: {
          tileId: 0,
          switches: [[1]]
        },
      };

      const store = mockStore(initialState);
      store.dispatch(move(2,2));

      expect(store.getActions()).eql([]);
    });
  });

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
