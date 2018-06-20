import React from "react"
import { expect } from "chai"
import { mount } from "enzyme"
import { GameField } from "components/gamefield"
import { startingPatterns } from "constants/patterns"

describe("Gamefield component", () => {
  let wrapper;

  function wrapperMaker() {
    const props = {
      switches: startingPatterns[0],
      // TODO: use something like jest.fn()
      move: (r,c) => {}
    }

    return mount(<GameField {...props}/>);
  } 

  beforeEach(() => {
    wrapper = wrapperMaker();
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
