const readImage = require('./services/read-image-file');
const writeImage = require('./services/write-image-file');
const readLineAsync = require('./services/read-line-async');
const menu = require('./services/menu-item');

const main = async () => {
    while (true) {
        console.clear();
        const value = await readLineAsync("-------MENU-------\n1 -- Gauss by blur-box\n");
        const obj = menu(Number(value));
        const image = await readImage('./source/exmpl.png');
        const start = performance.now();
        const result = obj.process(image, 2);
        const end = performance.now();
        console.log(`Process time: ${end - start}ms || ${(end - start) / 1000}sec`)
        writeImage(result, `./source/${obj.constructor.name}.png`)
    }

}

main()