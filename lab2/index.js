const readImage = require('./services/read-image-file');
const GaussByBoxBlur = require('./services/gauss/guass-by-box-blur');
const writeImage = require('./services/write-image-file');

const main = async () => {
    const image = await readImage('./source/exmpl.png');
    GaussByBoxBlur.gaussBoxBlur(image);
    writeImage(GaussByBoxBlur.res, './source/blur.png')
}   

main()