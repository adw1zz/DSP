const readLineAsync = require('../readLineAsync');
const chooseGenerator = require('../chooseGenerator');
const wavFileGenerator = require('../wavFileGenerator');
const polyharmonicalSingalGenerator = require('./polyharmonical-generator');

const generateNewSignal = async () => {
    console.log("\n----Choose Generator for Signal-----");
    const signalType = await readLineAsync("1 - Noize\n2 - Pulse\n3 - Sawtooth\n4 - Sinusoid\n5 - Triangle\n0 - exit\n");
    if (signalType == 0) {
        return [];
    }
    const generator = chooseGenerator(Number(signalType));
    const amplitude = Number(await readLineAsync("\nAmplitude: "));
    const frequency = Number(await readLineAsync("Frequency: "));
    const initialPhase = Number(await readLineAsync("Initial Phase: "));
    const sampleRate = Number(await readLineAsync("Sample Rate: "));
    const dutyCycle = Number(await readLineAsync("Duty Cycle: "));
    const time = Number(await readLineAsync("Time: "));
    const signal = generator?.generateSignal({ amplitude, frequency, initialPhase, sampleRate, dutyCycle, time });
    console.log('\n----Message signal complete----\n');
    return signal;
}

const generateFile = async (signals) => {
    const resultSignal = polyharmonicalSingalGenerator.generatePolyharmonicalSignal(signals);
    await wavFileGenerator(resultSignal, 44100, "./services/polyhormonical-signal-generation/polyharmonical_signal.wav");
    console.log('\n---Complete---\n');
}

const polyhormonicalModulation = async () => {
    const signals = [];

    while (true) {
        console.clear();
        console.log("\n----Choose step----");
        const step = await readLineAsync("1 - Generate Signal\n2 - Generate File\n0 - exit\n");
        if (step == 0) {
            break;
        } else if (step == 1) {
            const sig = await generateNewSignal();
            if (sig.length !== 0) {
                signals.push(sig);
            }
        } else if (step == 2) {
            if (signals.length !== 0) {
                await generateFile(signals);
            }
        }
    }
}

module.exports = polyhormonicalModulation;