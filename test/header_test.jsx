import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { Header } from "header"

describe("Header component", () => {
  context("when game is not running", () => {
    it("displays the correct title", () => {
      const wrapper = shallow(<Header game={"not_running"}/>);
      
      expect(wrapper.find("h1").text()).equal("Switches");
    });
  });
  
  context("when game is running", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Header game={"running"}/>);
    });

    it("displays the correct title", () => {      
      expect(wrapper.find("h1").text()).equal("Tap a switch");
    });

    // TODO:
    it("shows abort link", () => {
      // expect(wrapper.find(".button .button--action").text()).equal("Abort");
    });
  });

  context("when game is won", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Header game={"victory"}/>);
    });

    it("displays the correct title", () => {      
      expect(wrapper.find("h1").text()).equal("Victory");
    });

  });
});
