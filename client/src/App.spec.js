import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("should render a router", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("home").length).toEqual(1);
  });
});
