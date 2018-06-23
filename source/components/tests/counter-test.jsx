import * as React from "react"
import chai from "chai"
import { shallow } from "enzyme"
import { Counter } from "../counter"

const expect = chai.expect

describe("Counter component", () => {
  it("should show the number of pressed tiles", () => {
    const wrapper = shallow(<Counter counter={5}/>);

    expect(wrapper.find(".counter").text()).equals("5 buttons pressed");
  });
});
