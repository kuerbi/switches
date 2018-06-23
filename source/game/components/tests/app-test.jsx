import * as React from "react"
import chai from "chai"
import { shallow } from "enzyme"
import App from "../app"
import GameBoard from "../gameboard"

const expect = chai.expect

describe("App component", () => {
  it("shows a gameboard", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(GameBoard)).to.have.length(1);
  });
});
