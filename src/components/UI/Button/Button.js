import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children = null, classNames = 'btn', ...rest }) => {
    return (
        <button className={classNames} onClick={onClick} type={rest.type}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    classNames: PropTypes.string,
};
export default Button;
