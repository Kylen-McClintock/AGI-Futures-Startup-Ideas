import { inferHeavyTail } from './src/utils/forecastMath';

const testInput = { "10000000": 60, "1000000000": 20 };
console.log("Input:", testInput);
console.log("Output:", inferHeavyTail(testInput));
