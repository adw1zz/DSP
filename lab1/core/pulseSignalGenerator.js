class PulseSignalGenerator {

    #generateSignalValue(amplitude, frequency, sampleRate, initialPhase, dutyCycle, n) {
        return ((2 * Math.PI * frequency * n / sampleRate + initialPhase) % (2 * Math.PI)) / (2 * Math.PI) <= dutyCycle ? amplitude : -amplitude;
    }

    generateSignal(data) {
        const signal = [];
        for (let i = 0; i < data.sampleRate * data.time; i++) {
            const signalValue = this.#generateSignalValue(data.amplitude, data.frequency, data.sampleRate, data.initialPhase, data.dutyCycle, i);
            signal.push(signalValue);
        }
        return signal;
    }

}

module.exports = PulseSignalGenerator;