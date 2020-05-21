import React from "react";
import { shallow } from "enzyme";
import Home from "./home";


describe("Home view", () => {
  it(" should render home component", () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.exists()).toBe(true);
  });
});
