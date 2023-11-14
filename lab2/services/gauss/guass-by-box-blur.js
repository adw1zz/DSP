const readLineAsync = require('../read-line-async');

class GaussByBoxBlur {

    #res;
    #kernel;

    constructor() {
        this.#res = null;
        this.#kernel = 1;
    }

    #boxBlur() {
        const result = [];
        const image = this.#res;
        for (let i = 0; i < image.length; i++) {
            result.push([]);
            for (let j = 0; j < image[i].length; j++) {
                let sumR = 0, sumG = 0, sumB = 0;
                let count = 0;
                for (let dx = -this.#kernel; dx <= this.#kernel; dx++) {
                    for (let dy = -this.#kernel; dy <= this.#kernel; dy++) {
                        const nx = i + dx;
                        const ny = j + dy;
                        if (nx >= 0 && nx < image.length && ny >= 0 && ny < image[i].length) {
                            sumR += image[nx][ny][0];
                            sumG += image[nx][ny][1];
                            sumB += image[nx][ny][2];
                            count++;
                        }
                    }
                }
                result[i][j] = [Math.floor(sumR / count), Math.floor(sumG / count), Math.floor(sumB / count)];
            }
        }
        this.#res = result;
    }

    process(image, kernalSize) {
        this.#res = image;
        this.#kernel = kernalSize;
        for (let i = 0; i < 3; i++) {
            this.#boxBlur();
        }
        return this.#res;
    }

}

module.exports = GaussByBoxBlur;