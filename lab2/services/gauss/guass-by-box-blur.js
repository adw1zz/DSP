class GaussByBoxBlur {

    #count = 0;
    res;

    gaussBoxBlur(image) {
        const result = [];
        this.#count++;
        for (let i = 0; i < image.length; i++) {
            result.push([]);
            for (let j = 0; j < image[i].length; j++) {
                let sumR = 0, sumG = 0, sumB = 0;
                let count = 0;
                for (let dx = -1; dx <= 1; dx++) {
                    for (let dy = -1; dy <= 1; dy++) {
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
        if (this.#count > 20) {
            return;
        } else {
            this.res = result;
            this.gaussBoxBlur(result);
        }
    }

}

module.exports = new GaussByBoxBlur();