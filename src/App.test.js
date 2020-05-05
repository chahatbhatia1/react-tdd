import React from 'react';
import {  mount } from "enzyme";
import App from './App';

it("App component should render Navbar ", () => {
  const wrapper = mount(<App />);
  const navbar = wrapper.find("Navbar");

  expect(navbar).toHaveLength(1);
});