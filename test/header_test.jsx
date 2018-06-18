import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import Header from "header"

describe("Header component", () => {
  it("displays the correct title", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find("h1").text()).equal("Switches");
  });
});
