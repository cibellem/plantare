import React from "React";
import { shallow } from "enzyme";
import Login from "./index";

describe("Login view", () => {
  it(" should render login view ", () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.exists()).toBe(true);
  });
});
