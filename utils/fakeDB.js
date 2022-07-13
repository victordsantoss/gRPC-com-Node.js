let fakeValues = [];

const getRandomArbitrary = (min, max) => {
    return Number((Math.random() * (1000000 - 0) + 0).toFixed(4));
};

const generateFakeDB = () => {
    for (let index = 0; index < 100; index++) {
        fakeValues.push({ id: index, number: getRandomArbitrary() })
    };
    return fakeValues;
};

module.exports = generateFakeDB;