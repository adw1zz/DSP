const NoizeSignalGenerator = require("../core/noizeSignalGenerator");
const PulseSignalGenerator = require("../core/pulseSignalGenerator");
const SawtoothSignalGenerator = require("../core/pulseSignalGenerator");
const SinusoidSignalGenerator = require("../core/sawtoothSignalGenerator");
const TriangleSignalGenerator = require("../core/triangleSignalGenerator");

const chooseGenerator = (num) => {
    switch(num) {
        case 1: return new NoizeSignalGenerator();
        case 2: return new PulseSignalGenerator();
        case 3: return new SawtoothSignalGenerator();
        case 4: return new SinusoidSignalGenerator();
        case 5: return new TriangleSignalGenerator();
        default: return null;
    }
}

module.exports = chooseGenerator;