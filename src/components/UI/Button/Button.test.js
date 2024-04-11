import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('</Button>', () => {
    const mockProps = {
        type: 'button',
        className: 'button-class',
        onClick: jest.fn(),
        children: 'Dummy Button',
    };

    test('renders as expected', () => {
        const wrapper = renderer.create(<Button {...mockProps} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    test('should call the onClick function when button clicked', () => {
        const wrapper = shallow(<Button {...mockProps} />);
        wrapper.find('button').simulate('click');
        expect(mockProps.onClick).toHaveBeenCalled();
    });

    test('should exists button node', () => {
        const wrapper = shallow(<Button {...mockProps} />);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    test('should have the class btn rounded', () => {
        const wrapper = shallow(<Button {...mockProps} />);
        expect(wrapper.hasClass('button-class')).toBeTruthy();
    });

    test('should have a the default children', () => {
        const wrapper = shallow(<Button onClick={mockProps.onClick} />);
        expect(wrapper.find('button').text()).toBe('');
    });
    test('should have a children', () => {
        const wrapper = shallow(<Button {...mockProps} />);
        expect(wrapper.find('button').text()).toBe('Dummy Button');
    });
});
