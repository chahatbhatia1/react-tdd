import { shallow, mount } from "enzyme";
import React from 'react';

import NavBar from "../NavBar";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });


it("should render a navbar component", ()=> {
    const wrapper = shallow(<NavBar />);
    const navbar = wrapper.find('Navbar');

    expect(navbar).toHaveLength(1);
});

it("should render a navbar brand", ()=> {
    const wrapper = shallow(<NavBar />);
    const brand = wrapper.find('NavbarBrand');

    expect(brand).toHaveLength(1);
});

it("navbar brand should have a text 'On Time Food' ", ()=> {
    const wrapper = mount(<NavBar />);
    const brand = wrapper.find('NavbarBrand');

    expect(brand.text()).toEqual('On Time Food');
});