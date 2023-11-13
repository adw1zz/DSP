const readLineAsync = require('../readLineAsync');
const chooseGenerator = require('../chooseGenerator');
const wavFileGenerator = require('../wavFileGenerator');

const amplitudeModulation = async () => {
    while (true) {
        console.clear();
        console.log("\n----Choose Generator for Message Signal-----");
        let signalType = await readLineAsync("1 - Noize\n2 - Pulse\n3 - Sawtooth\n4 - Sinusoid\n5 - Triangle\n0 - exit\n");
        if (signalType == 0) {
            break;
        }
        let generator = chooseGenerator(Number(signalType));
        let messageSignalGeneratorName = generator.constructor.name;
        let amplitude = Number(await readLineAsync("\nAmplitude: "));
        let frequency = Number(await readLineAsync("Frequency: "));
        let initialPhase = Number(await readLineAsync("Initial Phase: "));
        let sampleRate = Number(await readLineAsync("Sample Rate: "));
        let dutyCycle = Number(await readLineAsync("Duty Cycle: "));
        let time = Number(await readLineAsync("Time: "));
        let messageSignal = generator?.generateSignal({ amplitude, frequency, initialPhase, sampleRate, dutyCycle, time });
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
        await wavFileGenerator(modulatedSignal, sampleRate, `./services/amplitude-modulation/${messageSignalGeneratorName}-by-${modulatedSignalGeneratorName}.wav`);
        console.log('\n----Modulated signal complete----\n');
    }
}

module.exports = amplitudeModulation;