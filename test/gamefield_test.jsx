import React from "react"
import { expect } from "chai"
import { mount } from "enzyme"
import { GameField } from "gamefield"
import { startingPatterns } from "constants/patterns"

describe("Gamefield component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<GameField fields={startingPatterns[0]} />);
  })

  it("shows 25 switches", () => {

    expect(wrapper.find(".pattern")).to.have.length(25);
  });

});
