const defaultSignalGeneration = require('./services/defaultSignalGeneration');
const readLineAsync = require('./services/readLineAsync');

const main = async () => {
    while (true) {
        console.log("\n----Choose Generation-----");
        const signalType = await readLineAsync("1 - Default Signal Generation\n2 - Amlitude Modulation\n3 - Frequency Modulation\n4 - Polyhormonical Modulation\n");
        if (signalType == 0) {
            break;
        }
        switch(Number(signalType)) {
            case 1: 
                await defaultSignalGeneration();
                break;
            default: break;
        }
    }   
}

main();