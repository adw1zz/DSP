class NoizeSignalGenerator {

    #generateSignalValue(amplitude) {
        return amplitude * Math.random();
    }

    generateSignal(data) {
        const signal = [];
        for (let i = 0; i < data.sampleRate * data.time; i++) {
            const signalValue = this.#generateSignalValue(data.amplitude);
            signal.push(signalValue);
        }
        return signal;
    }
}

module.exports = NoizeSignalGenerator;