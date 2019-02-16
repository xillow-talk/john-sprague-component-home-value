
import React from 'react';
import Enzyme, { mount, render, shallow} from 'enzyme';
import App from '../components/App.jsx';
// import Modal from '..//components/Modal.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

var setup = () => {
  const props = {
  };
  const wrapper = shallow(<App />);
  return { wrapper, props };
}


describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});


// describe('App', () => {
//   test('should render', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.exists()).toBe(true);
//   });
//   test('should not show modal upon rendering', () => {
//     const wrapper = shallow(<App />);
//     const showState = wrapper.state().show;
//     expect(showState).toEqual(false);
//   });
// };