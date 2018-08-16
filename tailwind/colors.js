let chroma = require('chroma-js');

const PRIMARY = '#25499c';
const COMET = '#576074';
const SECONDARY = '#00339F';
const LOCHMARA = '#3067A8';
const SUMMER = '#29ABE2';
const GREY = '#f1f2f3';

module.exports = {

    /**
     * Client Colors
     */
    'norwegian': '#d81939',
    'finnair': '#0d1973',
    'thomascook': '#fea907',

    /**
     * Base Colors
     */
    'transparent': 'transparent',
    'black': '#22292f',
    'black-opacity-90': 'rgba(0,0,0,0.1)',
    'black-opacity-70': 'rgba(0,0,0,0.3)',
    'black-opacity-50': 'rgba(0,0,0,0.5)',
    'black-opacity-25': 'rgba(0,0,0,0.75)',
    'black-opacity-10': 'rgba(0,0,0,0.90)',
    'white': '#ffffff',

    /**
     * Support Colors
     */
    'grey-darkest': '#3d4852',
    'grey-darker': '#606f7b',
    'grey-dark': '#8795a1',
    'grey': '#797979',
    'grey-light': '#eeeeee',
    'grey-lighter': '#f1f1f1',
    'grey-lightest': '#f7f7f7',

    'red-darkest': '#3b0d0c',
    'red-darker': '#621b18',
    'red-dark': '#cc1f1a',
    'red': '#e3342f',
    'red-light': '#ef5753',
    'red-lighter': '#f9acaa',
    'red-lightest': '#fcebea',

    'orange-darkest': '#462a16',
    'orange-darker': '#613b1f',
    'orange-dark': '#de751f',
    'orange': '#f6993f',
    'orange-light': '#faad63',
    'orange-lighter': '#fcd9b6',
    'orange-lightest': '#fff5eb',

    'green-darkest': '#0f2f21',
    'green-darker': '#1a4731',
    'green-dark': '#1f9d55',
    'green': '#38c172',
    'green-light': '#51d88a',
    'green-lighter': '#a2f5bf',
    'green-lightest': '#e3fcec',

    /**
     * Brand Colors
     */
    'blue-darkest': chroma(PRIMARY).darken(3),
    'blue-darker': chroma(PRIMARY).darken(2),
    'blue-dark': chroma(PRIMARY).darken(),
    'blue': PRIMARY,
    'blue-light': chroma(PRIMARY).brighten(),
    'blue-lighter': chroma(PRIMARY).brighten(2),
    'blue-lightest': chroma(PRIMARY).brighten(3),

    'comet-darkest': chroma(COMET).darken(3),
    'comet-darker': chroma(COMET).darken(2),
    'comet-dark': chroma(COMET).darken(),
    'comet': COMET,
    'comet-light': chroma(COMET).brighten(),
    'comet-lighter': chroma(COMET).brighten(2),
    'comet-lightest': chroma(COMET).brighten(3),

    'secondary-darkest': chroma(SECONDARY).darken(3),
    'secondary-darker': chroma(SECONDARY).darken(2),
    'secondary-dark': chroma(SECONDARY).darken(),
    'secondary': SECONDARY,
    'secondary-light': chroma(SECONDARY).brighten(),
    'secondary-lighter': chroma(SECONDARY).brighten(2),
    'secondary-lightest': chroma(SECONDARY).brighten(3),

    'lochmara-darkest': chroma(LOCHMARA).darken(3),
    'lochmara-darker': chroma(LOCHMARA).darken(2),
    'lochmara-dark': chroma(LOCHMARA).darken(),
    'lochmara': LOCHMARA,
    'lochmara-light': chroma(LOCHMARA).brighten(),
    'lochmara-lighter': chroma(LOCHMARA).brighten(2),
    'lochmara-lightest': chroma(LOCHMARA).brighten(3),

    'summer-darkest': chroma(SUMMER).darken(3),
    'summer-darker': chroma(SUMMER).darken(2),
    'summer-dark': chroma(SUMMER).darken(),
    'summer': SUMMER,
    'summer-light': chroma(SUMMER).brighten(),
    'summer-lighter': chroma(SUMMER).brighten(2),
    'summer-lightest': chroma(SUMMER).brighten(3),

    'brand-grey-darkest': chroma(GREY).darken(3),
    'brand-grey-darker': chroma(GREY).darken(2),
    'brand-grey-dark': chroma(GREY).darken(),
    'brand-grey': GREY,
    'brand-grey-light': chroma(GREY).brighten(),

};