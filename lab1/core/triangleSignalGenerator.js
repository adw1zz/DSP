class TriangleSignalGenerator {

    #generateSignalValue(amplitude, frequency, sampleRate, initialPhase, n) {
        return 2 * amplitude / Math.PI * Math.abs(((2 * Math.PI * frequency * n / sampleRate + initialPhase - Math.PI / 2) % (2 * Math.PI)) - Math.PI) - amplitude;
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

module.exports = TriangleSignalGenerator;