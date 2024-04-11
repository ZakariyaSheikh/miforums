import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
    onChange,
    name,
    id,
    disabled = false,
    className = 'checkbox',
}) => {
    return (
        <span className={className}>
            <label>
                <input
                    type='checkbox'
                    onChange={onChange}
                    name={name}
                    disabled={disabled}
                    id={id}
                ></input>
                {name}
            </label>
        </span>
    );
};

Checkbox.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
};

export default Checkbox;
