import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

afterEach(cleanup);

describe('</Checkbox>', () => {
    const mockProps = {
        onChange: jest.fn(),
        name: 'Test',
        id: 'Test',
        disabled: false,
        className: 'checkboxTest',
    };

    test('should render as expected', () => {
        // const { container } = render(<Checkbox {...mockProps} />);
        // expect(container.firstChild).toMatchSnapshot();
        const wrapper = renderer.create(<Checkbox {...mockProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should call onClick', () => {
        render(<Checkbox {...mockProps} />);
        fireEvent.click(screen.getByText('Test'));
        expect(mockProps.onChange).toHaveBeenCalled();
    });

    test('should have className', () => {
        const { container } = render(<Checkbox {...mockProps} />);
        expect(container.firstChild).toHaveClass('checkboxTest');
    });

    test('should be disabled', () => {
        const { getByRole } = render(
            <Checkbox {...mockProps} disabled={true} />
        );
        expect(getByRole('checkbox')).toBeDisabled();
    });
});
