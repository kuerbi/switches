import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import App from "app"
import Header from "header"

describe("App component", () => {
  it("shows one header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.length(1);
  });
})
