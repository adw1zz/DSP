const GaussByBoxBlur = require('./gauss/guass-by-box-blur');

const menu = (value) => {
    switch(value){
        case 1: return new GaussByBoxBlur();
        default: return null;
    }
}

module.exports = menu;