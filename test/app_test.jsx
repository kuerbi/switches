import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import App from "app"
import Header from "header"
import Footer from "footer"
import GameField from "gamefield" 

describe("App component", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  
  it("shows one header component", () => {
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it("shows one GameField", () => {
    expect(wrapper.find(GameField)).to.have.length(1);
  });
  
  it("shows one footer", () => {
    expect(wrapper.find(Footer)).to.have.length(1);
  });
})
