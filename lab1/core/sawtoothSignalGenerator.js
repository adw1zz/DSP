class SawtoothSignalGenerator {

    #generateSignalValue(amplitude, frequency, sampleRate, initialPhase, n) {
        return amplitude / Math.PI * ((2 * Math.PI * frequency * n / sampleRate + initialPhase - Math.PI) % (2 * Math.PI)) - amplitude;
    }

    generateSignal(data) {
        const signal = [];
        for (let i = 0; i < data.sampleRate * data.time; i++) {
            const signalValue = this.#generateSignalValue(data.amplitude, data.frequency, data.sampleRate, data.initialPhase, i);
            signal.push(signalValue);
        }
        return signal;
    }
}

module.exports = SawtoothSignalGenerator;