class PulseSignalGenerator {

    generateAmplitudeModulatedSignal(messageSignal, carrierSignalData) {
        const modulatedSignal = [];
        const length = carrierSignalData.sampleRate * carrierSignalData.time;
        for (let i = 0; i < length; i++) {
            const modulatedSignalValue = this.#generateSignalValue(carrierSignalData.amplitude * (1 + messageSignal[i]), carrierSignalData.frequency, carrierSignalData.sampleRate, carrierSignalData.initialPhase, carrierSignalData.dutyCycle, i);
            modulatedSignal.push(modulatedSignalValue);
        }
        return modulatedSignal;
    }

    generateFrequencyModulatedSignal(messageSignal, carrierSignalData) {
        const modulatedSignal = [];
        const length = carrierSignalData.sampleRate * carrierSignalData.time;
        let sum = 0;
        for (let i = 0; i < length; i++) {
            sum += 1 + messageSignal[i];
            const modulatedSignalValue = this.#generateSignalValue(carrierSignalData.amplitude, carrierSignalData.frequency * sum, carrierSignalData.sampleRate, carrierSignalData.initialPhase, carrierSignalData.dutyCycle, 1);
            modulatedSignal.push(modulatedSignalValue);
        }
        return modulatedSignal;
    }

    #generateSignalValue(amplitude, frequency, sampleRate, initialPhase, dutyCycle, n) {
        return ((2 * Math.PI * frequency * n / sampleRate + initialPhase) % (2 * Math.PI)) / (2 * Math.PI) <= dutyCycle ? amplitude : -amplitude;
    }

    generateSignal(data) {
        const signal = [];
        const length = data.sampleRate * data.time;
        for (let i = 0; i < length; i++) {
            const signalValue = this.#generateSignalValue(data.amplitude, data.frequency, data.sampleRate, data.initialPhase, data.dutyCycle, i);
            signal.push(signalValue);
        }
        return signal;
    }

}

module.exports = PulseSignalGenerator;