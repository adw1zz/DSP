class SobelOperator {
    #res;

    constructor() {
        this.#res = null;
    }

    #sobelOperator(image) {
        let height = image.length;
        let width = image[0].length;
        let sobelImage = new Array(height).fill(0).map(() => new Array(width).fill([0, 0, 0]));

        for (let y = 0; y < height; ++y) {
            for (let x = 0; x < width; ++x) {
                let gx = [0, 0, 0];
                let gy = [0, 0, 0];

                for (let c = 0; c < 3; ++c) {
                    for (let i = -1; i <= 1; ++i) {
                        for (let j = -1; j <= 1; ++j) {
                            let pixel = (image[y + i] && image[y + i][x + j]) ? image[y + i][x + j][c] : 0;
                            gx[c] += pixel * ((j === 1) ? 1 : (j === -1) ? -1 : 0);
                            gy[c] += pixel * ((i === 1) ? 1 : (i === -1) ? -1 : 0);
                        }
                    }
                }

                let magnitude = gx.map((val, i) => Math.sqrt(val * val + gy[i] * gy[i]));
                magnitude = magnitude.map(val => Math.min(255, Math.floor(val / Math.sqrt(2))));

                sobelImage[y][x] = magnitude;
            }
        }

        this.#res = sobelImage;
    }

    process(image) {
        this.#sobelOperator(image);
        return this.#res;
    }
}

module.exports = SobelOperator;