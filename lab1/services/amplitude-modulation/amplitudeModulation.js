const readLineAsync = require('../readLineAsync');
const chooseGenerator = require('../chooseGenerator');
const wavFileGenerator = require('../wavFileGenerator');

const amplitudeModulation = async () => {
    while (true) {
        console.clear();
        console.log("\n----Choose Generator for Message Signal-----");
        const signalType = await readLineAsync("1 - Noize\n2 - Pulse\n3 - Sawtooth\n4 - Sinusoid\n5 - Triangle\n0 - exit\n");
        if (signalType == 0) {
            break;
        }
        const generator = chooseGenerator(Number(signalType));
        const messageSignalGeneratorName = generator.constructor.name;
        const amplitude = Number(await readLineAsync("\nAmplitude: "));
        const frequency = Number(await readLineAsync("Frequency: "));
        const initialPhase = Number(await readLineAsync("Initial Phase: "));
        const sampleRate = Number(await readLineAsync("Sample Rate: "));
        const dutyCycle = Number(await readLineAsync("Duty Cycle: "));
        const time = Number(await readLineAsync("Time: "));
        const messageSignal = generator?.generateSignal({ amplitude, frequency, initialPhase, sampleRate, dutyCycle, time });
        console.log('\n----Message signal complete----\n');

        console.log("\n----Choose Generator for Carrier Signal-----");
        signalType = await readLineAsync("1 - Noize\n2 - Pulse\n3 - Sawtooth\n4 - Sinusoid\n5 - Triangle\n0 - exit\n");
        if (signalType == 0) {
            break;
        }
        generator = chooseGenerator(Number(signalType));
        const modulatedSignalGeneratorName = generator.constructor.name;
        amplitude = Number(await readLineAsync("\nAmplitude: "));
        frequency = Number(await readLineAsync("Frequency: "));
        initialPhase = Number(await readLineAsync("Initial Phase: "));
        sampleRate = Number(await readLineAsync("Sample Rate: "));
        dutyCycle = Number(await readLineAsync("Duty Cycle: "));
        time = Number(await readLineAsync("Time: "));
        const modulatedSignal = generator?.generateAmplitudeModulatedSignal(messageSignal, { amplitude, frequency, initialPhase, sampleRate, dutyCycle, time });
        await wavFileGenerator(modulatedSignal, sampleRate, `./services/amplitude-modulation/${messageSignalGeneratorName}-by-${modulatedSignalGeneratorName}`);
        console.log('\n----Modulated signal complete----\n');
    }
}

module.exports = amplitudeModulation;