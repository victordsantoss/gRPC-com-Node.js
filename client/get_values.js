const client = require('./client-grpc');
const handleMaxAndMin = require('../utils/values');

client.list({}, (error, array) => {
    if (error) throw error;
    const [max, min] = handleMaxAndMin(array.elements);
    console.log(max, min);
    console.log(`Valor Máximo: ${max.number}`);
    console.log(`Valor Mínimo: ${min.number}`);
});
