class NoizeSignalGenerator {

    generateAmplitudeModulatedSignal(messageSignal, carrierSignalData) {
        const modulatedSignal = [];
        const length = carrierSignalData.sampleRate * carrierSignalData.time;
        for (let i = 0; i < length; i++) {
            const modulatedSignalValue = this.#generateSignalValue(carrierSignalData.amplitude * (1 + messageSignal[i]));
            modulatedSignal.push(modulatedSignalValue);
        }
        return modulatedSignal;
    }

    generateFrequencyModulatedSignal(messageSignal, carrierSignalData) {
        const modulatedSignal = [];
        let sum = 0;
        const length = carrierSignalData.sampleRate * carrierSignalData.time;
        for (i = 0; i < length; i++) {
            sum +=1 + messageSignal[i];
            const modulatedSignalValue = this.#generateSignalValue(carrierSignalData.amplitude);
            modulatedSignal.push(modulatedSignalValue); 
        }
        return modulatedSignal;
    }

    #generateSignalValue(amplitude) {
        return amplitude * (2 * Math.random() - 1);
    }

    generateSignal(data) {
        const signal = [];
        const length = data.sampleRate * data.time;
        for (let i = 0; i < length; i++) {
            const signalValue = this.#generateSignalValue(data.amplitude);
            signal.push(signalValue);
        }
        return signal;
    }
}

module.exports = NoizeSignalGenerator;