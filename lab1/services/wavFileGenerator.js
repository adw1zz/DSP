const fs = require('fs');
const wav = require('node-wav');

const generateWavFile = (signal, sampleRate, time, fileName) => {
    let buffer = wav.encode(signal, { sampleRate: sampleRate, float: true, bitDepth: 32 });

    fs.writeFile("test.wav", buffer, (err) => {
        if (err) return console.log(err);

        console.log("test.wav written");
    });
}

module.exports = generateWavFile;