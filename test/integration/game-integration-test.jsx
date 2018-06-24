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
  let wrapper;

  context("game is running", () => {
    beforeEach(() => {
      const gameIsRunningState = {
        ...initialState,
        gameState: "running",
        tiles: demoTiles
      }

      wrapper = mount(
        <Root initialState={{...initialState, gameState: "running"}}>
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
        <Root initialState={{...initialState, gameState: "not_running"}}>
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
});
