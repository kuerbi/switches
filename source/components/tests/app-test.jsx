import * as React from "react"
import chai from "chai"
import { shallow } from "enzyme"
import App from "../app"
import Game from "../game"

const expect = chai.expect

describe("App component", () => {
  it("shows the game", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Game)).to.have.length(1);
  });
});
