const readImage = require('./services/read-image-file');
const writeImage = require('./services/write-image-file');
const readLineAsync = require('./services/read-line-async');
const menu = require('./services/menu-item');

const main = async () => {
    while (true) {
        console.clear();
        const value = await readLineAsync("-------MENU-------\n1 -- Gauss by blur-box\n2 -- Median Filter\n3 -- Sobel Operator\n");
        let kernelSize = null;
        let filename = "exmpl";
        filename = await readLineAsync("Filename: ");
        if (Number(value) === 1 || Number(value) === 2) {
            const inp = await readLineAsync("Kernel size: ");
            kernelSize = Number(inp);
        }
        const obj = menu(Number(value));
        const image = await readImage(`./source/${filename}.png`);
        const start = performance.now();
        const result = obj.process(image, kernelSize);
        const end = performance.now();
        console.log(`Process time: ${end - start}ms || ${(end - start) / 1000}sec`)
        writeImage(result, `./source/${obj.constructor.name}.png`)
        const next = await readLineAsync("Press any key\n");
        if (next) {
            continue;
        }
    }

}

main()