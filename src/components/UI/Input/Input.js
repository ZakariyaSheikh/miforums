import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    name,
    onChange = null,
    onClick = null,
    onKeyPress = null,
    value,
    classNames = 'input',
    disabled = false,
    type,
    placeholder,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            className={`input ${classNames}`}
            onChange={onChange}
            disabled={disabled}
            onKeyPress={onKeyPress}
            onClick={onClick}
        />
    );
};

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    onKeyPress: PropTypes.func,
    classNames: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
