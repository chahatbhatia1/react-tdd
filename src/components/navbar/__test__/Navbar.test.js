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

it("navbar brand should have image tag ", ()=> {
    const wrapper = mount(<NavBar />);
    const img = wrapper.find('img');

    expect(img).toHaveLength(1);
});

it("navbar should have a navbar toggler button ", ()=> {
    const wrapper = mount(<NavBar />);
    const btn = wrapper.find('NavbarToggler');

    expect(btn).toHaveLength(1);
});

it("navbar should have a collapse menu ", ()=> {
    const wrapper = mount(<NavBar />);
    const menu = wrapper.find('Collapse');

    expect(menu).toHaveLength(1);
});

it("collapse menu with attribute isOpen = false ", ()=> {
    const wrapper = mount(<NavBar />);

    expect(wrapper.state().isOpen).toEqual(false);
});