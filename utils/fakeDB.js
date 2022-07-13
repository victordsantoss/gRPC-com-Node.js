const {vector_size} = require('../utils/global_constants');

const getRandomArbitrary = () => {
    return Number((Math.random() * (1000000 - 0) + 0).toFixed(4));
};

const generateFakeDB = () => {
    let fakeValues = [];
    for (let index = 0; index < vector_size; index++) {
        fakeValues.push({ id: index, number: getRandomArbitrary() })
    };
    return fakeValues;
};

module.exports = generateFakeDB;