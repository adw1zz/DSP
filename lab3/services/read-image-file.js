const fs = require('fs');
const PNG = require('pngjs').PNG;

const readImage = async (imagePath) => {
    return new Promise((resolve, reject) => {
        fs.createReadStream(imagePath)
            .pipe(new PNG())
            .on('parsed', function () {
                const image = [];
                for (let y = 0; y < this.height; y++) {
                    const row = [];
                    for (let x = 0; x < this.width; x++) {
                        let idx = (this.width * y + x) << 2;
                        row.push([this.data[idx], this.data[idx + 1], this.data[idx + 2]]);
                    }
                    image.push(row);
                }
                resolve(image);
            })
            .on('error', (e) => {
                console.error(e.message);
            });
    });
}

module.exports = readImage;