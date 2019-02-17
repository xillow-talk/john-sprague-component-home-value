
import React from 'react';
import Enzyme, { mount, render, shallow} from 'enzyme';
import App from '../components/App.jsx';
// import Modal from '..//components/Modal.jsx';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

Enzyme.configure({adapter: new Adapter});

var setup = () => {
  const props = {
  };
  const wrapper = shallow(<App />);
  return { wrapper, props };
};


describe('App component', () => {
  it('Should exist', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });


  test('Should successfully mount App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // it('Should render without throwing an error', () => {
  //   expect(shallow(<App />).find('.description').exists()).toBe(true);
  // });

  it('Should render the app component correctly', () => {  
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });


  //should render the button component 
  
  test('Should not show ZestimateRow upon rendering', () => {
    const wrapper = shallow(<App />);
    const isHidden = wrapper.state().isHidden;
    expect(isHidden).toEqual(true);
  });
  
  it('Should call componentDidMount', () => {
    const mount = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount).toHaveBeenCalled();
    mount.mockRestore();
  });
    it('should contain an ImportedComponent', () => {
      const wrapper = shallow(<App />);
      const ZestimateRow = renderer.create('<ZestimateRow />').toJSON();
      expect(ZestimateRow).toMatchSnapshot();
    });

    test('it works', () => {
      const tree = renderer.create('<Button />').toJSON();
      expect(tree).toMatchSnapshot();
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