const defaultFont = {
    fontFamily: '"Noto Sans JP", "Helvetica", "Arial", sans-serif',
    fontWeight: '300',
    lineHeight: '1.5em',
};

const primaryColor = ['#757575', '#616161','#424242'];
const warningColor = ['#ffee58', '#ffeb3b', '#fdd835'];
const dangerColor = ['#ec5169', '#f44336', '#e53935'];
const infoColor = ['#2196f3', '#1e88e5', '#1976d2'];
const successColor = ['#43a047', '#388e3c', '#2e7d32', '#0DBE00'];

const blackColor = '#000';
const whiteColor = '#FFF';
const darkColor = '#333';

const containerFluid = {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%'
};

const container = {
    ...containerFluid,
    '@media (min-width: 320px)': {
        maxWidth: '375px',
        boxSizing: 'border-box',
    },
    '@media (min-width: 576px)': {
        maxWidth: '540px'
    },
    '@media (min-width: 768px)': {
        maxWidth: '720px'
    },
    '@media (min-width: 992px)': {
        maxWidth: '960px'
    },
    '@media (min-width: 1200px)': {
        maxWidth: '1400px',
        padding: '0px'
    }
};

export {
    defaultFont,
    primaryColor,
    warningColor,
    dangerColor,
    infoColor,
    successColor,
    blackColor,
    whiteColor,
    darkColor,
    container,
};
