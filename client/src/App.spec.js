import React from "react";
import { shallow } from "enzyme";
import App from "./App";


//simple shallow test that test if component it's being rendered
describe("App component", () => {
  it("should render app component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
