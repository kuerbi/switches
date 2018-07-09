import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"
import sinon from "sinon"

import { Header } from "components/header"

describe("Header component", () => {
  context("when game is not running", () => {
    it("displays the correct title", () => {
      const wrapper = shallow(<Header game={"not_running"}/>);
      
      expect(wrapper.find("h1").text()).equal("Switches");
    });
  });
  
  context("when game is running", () => {
    let wrapper;
    let spyAbortGame = sinon.spy()

    beforeEach(() => {
      wrapper = shallow(<Header game={"running"} abortGame={spyAbortGame}/>);
    });

    it("displays the correct title", () => {      
      expect(wrapper.find("h1").text()).equal("Tap a switch");
    });

    describe("click on abort", () => {
      beforeEach(() => {
        wrapper.find(".header__action > .action").simulate("click", {
          preventDefault: () => {}
        });
      })

      it("should call abortGame", () => {
        expect(spyAbortGame).to.have.property("callCount", 1)
      })
    });

  });

  context("when game is victory", () => {
    let wrapper;
    let spyRestartGame = sinon.spy()

    beforeEach(() => {
      wrapper = shallow(<Header game={"victory"} restartGame={spyRestartGame}/>);
    });

    it("displays the correct title", () => {      
      expect(wrapper.find("h1").text()).equal("Victory");
    });

    describe("click on restart", () => {
      beforeEach(() => {
        wrapper.find(".header__action > .action").simulate("click", {
          preventDefault: () => {}
        });
      })

      it("should call restartGame", () => {
        expect(spyRestartGame).to.have.property("callCount", 1)
      })
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
