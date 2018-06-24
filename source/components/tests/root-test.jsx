import * as React from "react"
import chai from "chai"
import { shallow } from "enzyme"
import Root from "../root"
import { Provider } from "react-redux"

const expect = chai.expect

describe("Root component", () => {
  it("has a provider", () => {
    const wrapper = shallow(<Root />);

    expect(wrapper.find(Provider)).to.have.length(1);
  });
});
