import React from "react";
import { shallow } from "enzyme";
import PlantCard from "./index";

describe("PlantCard", () => {
  it("should render a div", () => {
    const wrapper = shallow(<PlantCard />);
    expect(wrapper.find("div").length).toEqual(4);
  });
});
