const grpc = require('grpc');
const elementsProto = grpc.load('elements.proto');
const {local_server} = require('./utils/global_constants');
const handleMaxAndMin = require('./utils/values');

const server = new grpc.Server({
    "grpc.max_receive_message_length": 1024 * 1024 * 200,
    "grpc.max_send_message_length": 1024 * 1024 * 200
});

server.addService(elementsProto.ElementService.service, {
    List: (array, callback) => {
        console.log('FAKE DB: ', array.request.elements);
        const [minNumber, maxNumber] = handleMaxAndMin(array.request.elements);
        callback(null, {min: minNumber, max: maxNumber});
    }
});

server.bind(local_server, grpc.ServerCredentials.createInsecure());

console.log(`Server running at ${local_server}`);
server.start();