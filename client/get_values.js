const client = require('./client-grpc');
const generateFakeDB = require('../utils/fakeDB');

const elementList = generateFakeDB();

client.list(elementList, 
    (error, response) => {
        if (error) throw error;
        const {min, max} = response;
        console.log(`Valor Máximo: ${max}`);
        console.log(`Valor Mínimo: ${min}`);
});
