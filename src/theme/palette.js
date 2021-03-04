import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const palette = {
    white,
    black,
    primary: {
        contrastText: white,
        dark:colors.indigo[900],
        main:colors.indigo[500],
        light:colors.indigo[100],
    },
}

export default palette;