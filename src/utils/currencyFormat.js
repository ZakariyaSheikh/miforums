/**
 * @description - Format currency with currency code
 * @param {currency}
 * @return {string}- Formatted currency
 */
export const currencyFormat = (currency) => {
    switch (currency) {
        case 'GBP':
            return '£';
        case 'USD':
            return '$';
            case 'EUR':
            return '€';
        default:
            return '£';
    }
};

/**
 * @description - Format currency with commas
 * @param {currency}
 * @return {string}- Formatted currency with commas
 */
export const currrencyUnitConverter = (currency) =>
    new Intl.NumberFormat('en-US', { maximumSignificantDigits: 6 }).format(
        currency
    );
