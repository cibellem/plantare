import React from "react";
import { shallow } from "enzyme";
import Nav from "./index";

describe("Nav", () => {
  it("should render a <Nav />", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find("nav").length).toEqual(1);
  });
});
