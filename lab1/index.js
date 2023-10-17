const { createInterface } = require('readline');
const chooseGenerator = require('./services/chooseGenerator');
const wavFileGenerator = require('./services/wavFileGenerator');
const readline = createInterface({
    input: process.stdin,
    output: process.stdout
})

const readLineAsync = (msg) => {
    return new Promise(resolve => {
        readline.question(msg, userInput => {
            resolve(userInput);
        })
    })
}

const main = async () => {
    while (true) {
        console.log("\n----Choose Generator for Message Signal-----");
        const signalType = await readLineAsync("1 - Noize\n2 - Pulse\n3 - Sawtooth\n4 - Sinusoid\n5 - Triangle\n");
        const generator = chooseGenerator(Number(signalType));
        const amplitude = Number(await readLineAsync("\nAmplitude: "));
        const frequency = Number(await readLineAsync("Frequency: "));
        const initialPhase = Number(await readLineAsync("Initial Phase: "));
        const sampleRate = Number(await readLineAsync("Sample Rate: "));
        const dutyCycle = Number(await readLineAsync("Duty Cycle: "));
        const time = Number(await readLineAsync("Time: "));
        const signal = generator?.generateSignal({ amplitude, frequency, initialPhase, sampleRate, dutyCycle, time });
        wavFileGenerator(signal, sampleRate, time);
        console.log('---Complete---\n');
    }
}

main();