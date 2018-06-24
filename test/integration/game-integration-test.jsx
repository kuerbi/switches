//@flow
import * as React from "react"
import chai from "chai"
import { mount } from "enzyme"
import Root from "components/root"
import Game from "components/game"
import { initialState } from "state/reducers"
import { templates } from "tiles"

const expect = chai.expect;

describe("App integration", () => {
  const demoTiles = [
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,1,0,0],
    [0,1,0,1,0],
    [1,0,0,0,1]
  ];

  const zeroTiles = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ];
  
  const RunningState = {
    ...initialState,
    gameState: "running",
    tiles: demoTiles
  }

  const NotRunningState = {
    ...initialState,
    gameState: "not_running",
    tiles: zeroTiles
  }

  const VictoryState = {
    ...initialState,
    gameState: "victory",
    tiles: zeroTiles
  }

  let wrapper;

  context("game is running", () => {
    beforeEach(() => {
      wrapper = mount(
        <Root initialState={RunningState}>
          <Game />
        </Root>
      );
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it("shows a header with title and abort link", () => {
      expect(wrapper.find(".header").children()).to.have.length(2);
      expect(wrapper.find(".link").text()).equal("Abort");
    });
  });

  context("game is not running", () => {
    beforeEach(() => {
      wrapper = mount(
        <Root initialState={NotRunningState}>
          <Game />
        </Root>
      );
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it("shows a header with only a title", () => {
      expect(wrapper.find(".header").children()).to.have.length(1);
    });
  });

  context("game victory", () => {
    beforeEach(() => {
      wrapper = mount(
        <Root initialState={VictoryState}>
          <Game />
        </Root>
      );
    });

    afterEach(() => {
      wrapper.unmount();
    });
  });
});
