class SinusoidSignalGenerator {

    #generateSignalValue(amplitude, frequency, sampleRate, initialPhase, n) {
        return amplitude * Math.sin(2 * Math.PI * frequency * n / sampleRate + initialPhase);
    }

    generateSignal(data) {
        const signal = [];
        for (let i = 0; i < data.sampleRate * data.time; i++) {
            const signalValue = this.#generateSignalValue(data.amplitude, data.frequency, data.sampleRate, data.initialPhase, i);
            signal.push(signalValue);
        }
        console.log(signal);
        return signal;
    }
}

module.exports = SinusoidSignalGenerator;