import React, { memo } from 'react';
import Input from '../../UI/Input';
import PropTypes from 'prop-types';
import Dropdown from '../../UI/Dropdown';

const areEqual = (prevProps, nextProps) => {
    if (prevProps.name === nextProps.name) return true;
};

const RoiCalculatorItem = memo(
    ({
        onChangeInput,
        name,
        type,
        placeholder,
        classNames,
        value,
        dropdown,
        children,
        onCurrency,
        dropdownData,
    }) => {
        console.log('e');
        return (
            <div className='calculator'>
                <div className='calculator__text'>{children}</div>
                {name && (
                    <div className='calculator__input'>
                        {!dropdown ? (
                            <Input
                                onChange={onChangeInput}
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                classNames={classNames}
                                value={value}
                            />
                        ) : (
                            <Dropdown
                                onChange={onCurrency}
                                data={dropdownData}
                            />
                        )}
                    </div>
                )}
            </div>
        );
    },
    areEqual
);

RoiCalculatorItem.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    onChangeInput: PropTypes.func,
    onClick: PropTypes.func,
    onKeyPress: PropTypes.func,
    classNames: PropTypes.string,
    placeholder: PropTypes.string,
    dropdown: PropTypes.bool,
    dropdownData: PropTypes.array,
    onCurrency: PropTypes.func,
};

export default RoiCalculatorItem;
