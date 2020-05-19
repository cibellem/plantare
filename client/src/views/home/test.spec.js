import React from "react";
import { shallow } from "enzyme";
import Home from "./home";
import Nav from "../../components/Nav";

describe("Home", () => {
  it("should render a Nav component and a Hero component", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("nav").length).toEqual(1);
  });
});
