import React from "react";
import { shallow } from "enzyme";
import Hero from "./index";

describe("Hero", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper.find("div").length).toEqual(5);
  });
});
