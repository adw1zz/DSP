class MedianFilter {
    #res;
    #kernel;

    constructor() {
        this.#res = null;
        this.#kernel = 2;
    }

    #medianFilter(image) {
        let output = [];
        let window = [];

        for (let y = 0; y < image.length; y++) {
            output[y] = [];
            for (let x = 0; x < image[0].length; x++) {
                output[y][x] = [];
                for (let c = 0; c < 3; c++) {
                    window = [];
                    for (let i = -this.#kernel; i <= this.#kernel; i++) {
                        for (let j = -this.#kernel; j <= this.#kernel; j++) {
                            let xi = x + i;
                            let yj = y + j;
                            if (xi >= 0 && yj >= 0 && xi < image[0].length && yj < image.length) {
                                window.push(image[yj][xi][c]);
                            } else {
                                window.push(image[y][x][c]);
                            }
                        }
                    }
                    window.sort((a, b) => a - b);
                    let mid = Math.floor(window.length / 2);
                    output[y][x][c] = window[mid];
                }
            }
        }
        this.#res = output;
    }

    process(image, kernelSize) {
        this.#kernel = kernelSize ? kernelSize : this.#kernel;
        this.#medianFilter(image)
        return this.#res;
    }
}

module.exports = MedianFilter;