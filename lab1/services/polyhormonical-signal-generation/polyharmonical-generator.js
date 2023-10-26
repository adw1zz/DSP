class PolyharmonicalSingalGenerator {

    generatePolyharmonicalSignal(signals) {
        const polyharmonicalSingal = signals[0].map((value) => { return value });

        for (let i = 1; i < signals.length; i++) {
            const signalValues = signals[i];
            const length = signalValues.length;
            for (let j = 0; j < length; j++) {
                polyharmonicalSingal[j]+=signalValues[j];
            }
        }
        return polyharmonicalSingal;
    }
}

module.exports = new PolyharmonicalSingalGenerator();