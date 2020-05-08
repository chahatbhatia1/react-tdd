import React from 'react';
import { shallow } from "enzyme";
import Header from "../Header";



it("should render a header component", () => {
    const wrapper = shallow(<Header />);
    const header = wrapper.find(".header");
  
    expect(header).toHaveLength(1);
  });