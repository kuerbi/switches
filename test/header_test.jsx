import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { Header } from "header"

describe("Header component", () => {
  context("when game is not running", () => {
    it("displays the correct title", () => {
      const wrapper = shallow(<Header gameState={"not_running"}/>);
      
      expect(wrapper.find("h1").text()).equal("Switches");
    });
  });
  
  context("when game is running", () => {
    it("displays the correct title", () => {
      const wrapper = shallow(<Header gameState={"running"}/>);
      
      expect(wrapper.find("h1").text()).equal("Tap a switch");
    });
  });
});
