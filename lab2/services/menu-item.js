const GaussByBoxBlur = require('../core/gauss/guass-by-box-blur');
const MedianFilter = require('../core/median-filter/median-filter');
const SobelOperator = require('../core/sovel-operator/sobel-operator');

const menu = (value) => {
    switch(value){
        case 1: return new GaussByBoxBlur();
        case 2: return new MedianFilter();
        case 3: return new SobelOperator();
        default: return null;
    }
}

module.exports = menu;