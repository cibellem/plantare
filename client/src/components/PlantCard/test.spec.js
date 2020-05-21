import React from "react";
import { shallow } from "enzyme";
import PlantCard from "./index";

const mockData = [
  {
    name: "Beautiful Plant",
    price: 100,
    image: "http://google.com",
    key: 2,
  },
];
describe("PlantCard", () => {
  it("render props ", () => {
    const wrapper = shallow(<PlantCard products={mockData} />);
    expect(wrapper.exists()).toBe(true);
  });
});
