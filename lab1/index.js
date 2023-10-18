const defaultSignalGeneration = require('./services/default-signal-generation/defaultSignalGeneration');
const amplitudeModulation = require('./services/amplitude-modulation/amplitudeModulation');
const frequencyModulation = require('./services/frequency-modulation/frequencyModulation');
const polyhormonicalModulation = require('./services/polyhormonical-modulation/polyhormonicalModulation');
const readLineAsync = require('./services/readLineAsync');

const main = async () => {
    while (true) {
        console.log("\n----Choose Generation-----");
        const signalType = await readLineAsync("1 - Default Signal Generation\n2 - Amlitude Modulation\n3 - Frequency Modulation\n4 - Polyhormonical Modulation\n");
        if (signalType == 0) {
            break;
        }
        switch (Number(signalType)) {
            case 1:
                await defaultSignalGeneration();
                break;
            case 2:
                await amplitudeModulation();
                break;
            case 3:
                await frequencyModulation();
                break;
            case 4:
                await polyhormonicalModulation();
                break;
            default: break;
        }
    }
}

main();