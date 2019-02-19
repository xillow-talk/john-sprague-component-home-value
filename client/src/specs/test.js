
import React from 'react';
import Enzyme, { mount, render, shallow} from 'enzyme';
import {App, Button, DropDownArrow} from '../components/App.jsx';
// import Modal from '..//components/Modal.jsx';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ComparableHomesItem from '../components/ComparableHomesItem.jsx';

Enzyme.configure({adapter: new Adapter});

// A setuup function, one way of implementing tests
var setup = () => {
  const props = {
  };
  const wrapper = shallow(<App />);
  return { wrapper, props };
};

// Shallow rendering 
describe('App component', () => {
  it('Should exist', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  // Shallow rendering 
  test('Should successfully mount App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // it('Should render without throwing an error', () => {
  //   expect(shallow(<App />).find('<style>').exists()).toBe(true);
  // });

  // Shallow rendering 
  it('Should render the app component correctly', () => {  
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });

  // full DOM rendering
  test('should full DOM render', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  // Shallow rendering for styled components
  test('Should successfully mount Button Styled Component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
  test('Should successfully mount DropDownArrow Styled Component', () => {
    const wrapper = shallow(<DropDownArrow />);
    expect(wrapper.exists()).toBe(true);
  });

  // Snapshot test of styled components
  test('Should cotain a button styled component', () => {
    const tree = renderer.create('<Button />').toJSON();
    expect(tree).toMatchSnapshot();
  });

  // child component should be hidden upon rendering 
  test('Should not show child component upon rendering', () => {
    const wrapper = shallow(<App />);
    const isHidden = wrapper.state().isHidden;
    expect(isHidden).toEqual(true);
  });
  
  // imported components
  it('Should contain imported Components', () => {
    const wrapper = shallow(<App />);
    const ZestimateRow = renderer.create('<ZestimateRow />').toJSON();
    expect(ZestimateRow).toMatchSnapshot();
  });
  
  test('Should have properties in state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('isHidden')).toEqual(true);
    expect(wrapper.state('propertyData')).toEqual([{}]);
    expect(wrapper.state('comparableHomesData')).toEqual([{}]);
    expect(wrapper.state('localHomesData')).toEqual([{}]);
  });
  // invoking lifecycle method. 
  it('Should call componentDidMount', () => {
    const mount = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount).toHaveBeenCalled();
    mount.mockRestore();
  });

  // should have 4 properties in state ???

  //should fetch data 

  // should render data 

  // should show child component when button is clicked

  // test('Should show child component upon toggleing isHidden', () => {
  //   const wrapper = shallow(<Child />);
  //   const isHidden = wrapper.state().isHidden;
  //   expect(isHidden).toEqual(false);
  // });
});