const fs = require('fs');
const PNG = require('pngjs').PNG;

function writeImage(image, imagePath) {
    const png = new PNG({width: image[0].length, height: image.length});
    for (let y = 0; y < png.height; y++) {
        for (let x = 0; x < png.width; x++) {
            const idx = (png.width * y + x) << 2;
            png.data[idx] = image[y][x][0];
            png.data[idx+1] = image[y][x][1];
            png.data[idx+2] = image[y][x][2];
            png.data[idx+3] = 255;
        }
    }
    png.pack().pipe(fs.createWriteStream(imagePath));
}

module.exports = writeImage;