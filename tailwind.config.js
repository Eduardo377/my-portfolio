// tailwind.config.js
const withOpacityValue = (variable) => {
    return ({ opacityValue }) =>
        opacityValue === undefined
            ? `rgb(var(${variable}))`
            : `rgb(var(${variable}) / ${opacityValue})`;
};

module.exports = {
    theme: {
        extend: {
            colors: {
                background: withOpacityValue('--background'),
                primary: withOpacityValue('--primary'),
                'primary-dark': withOpacityValue('--primary-dark'),
            },
        },
    },
};
