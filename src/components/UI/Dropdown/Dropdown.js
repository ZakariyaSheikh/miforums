import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ onChange, data, className = 'dropdown' }) => {
    return (
        <select
            defaultValue={data.currencies[1]}
            onChange={onChange}
            className={className}
        >
            {data.currencies.map((d, i) => (
                <option value={d} key={i}>
                    {data.currencyNames[i]}
                </option>
            ))}
        </select>
    );
};

Dropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    data: PropTypes.array,
};

export default Dropdown;
