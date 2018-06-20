import React from "react"
import { expect } from "chai"
import { mount } from "enzyme"
import { GameField } from "gamefield"
import { startingPatterns } from "constants/patterns"

describe("Gamefield component", () => {
  let wrapper;

  function setup() {
    const props = {
      fields: startingPatterns[0],
      // TODO: use something like jest.fn()
      toggleSwitch: (r,c) => {}
    }

    let wrapper = mount(<GameField {...props}/>);

    return {
      wrapper
    }
  }

  beforeEach(() => {
    wrapper = setup().wrapper;
  })

  it("shows 25 switches", () => {
    expect(wrapper.find(".pattern")).to.have.length(25);
  });

  it("checkPlayerWin", () => {
    const inst = wrapper.instance();

    expect(inst.checkPlayerWin([[1,1,1,1,1]])).equal(true);
    expect(inst.checkPlayerWin([[1,1,1,1,0]])).equal(false);
  });

});
