import { shallow } from "enzyme";
import React from 'react';
import NavBar from "../NavBar";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });


it("should render a navBar component", ()=> {
    const wrapper = shallow(<NavBar />);
    const navbar = wrapper.find('Navbar');

    expect(navbar).toHaveLength(1);
})

