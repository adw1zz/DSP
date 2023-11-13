const fs = require('fs');
const WaveFile = require('wavefile').WaveFile;

const generateWavFile = async (signal, sampleRate, filePath) => {
    const wav = new WaveFile();
    wav.fromScratch(1, sampleRate, '32f', signal);
    await fs.promises.writeFile(filePath, wav.toBuffer(), );
    console.log(`\n${filePath}`);
}

module.exports = generateWavFile;