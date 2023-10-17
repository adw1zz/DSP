const readLineAsync = require('./readLineAsync');
const chooseGenerator = require('./chooseGenerator');
const wavFileGenerator = require('./wavFileGenerator');

const defaultSignalGeneration = async () => {
    while (true) {
        console.log("\n----Choose Generator for Message Signal-----");
        const signalType = await readLineAsync("1 - Noize\n2 - Pulse\n3 - Sawtooth\n4 - Sinusoid\n5 - Triangle\n0 - exit\n");
        if (signalType == 0) {
            break;
        }
        const generator = chooseGenerator(Number(signalType));
        const amplitude = Number(await readLineAsync("\nAmplitude: "));
        const frequency = Number(await readLineAsync("Frequency: "));
        const initialPhase = Number(await readLineAsync("Initial Phase: "));
        const sampleRate = Number(await readLineAsync("Sample Rate: "));
        const dutyCycle = Number(await readLineAsync("Duty Cycle: "));
        const time = Number(await readLineAsync("Time: "));
        const signal = generator?.generateSignal({ amplitude, frequency, initialPhase, sampleRate, dutyCycle, time });
        await wavFileGenerator(signal, sampleRate, `./core/sounds/${generator.constructor.name}.wav`);
        console.log('\n---Complete---\n');
    }
}

module.exports = defaultSignalGeneration;