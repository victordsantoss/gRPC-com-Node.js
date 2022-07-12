const grpc = require('grpc');
const elementsProto = grpc.load('elements.proto');
const generateFakeDB = require('./utils/fakeDB');
const local_server = require('./utils/global_constants');

const server = new grpc.Server();
server.addService(elementsProto.ElementService.service, {
    List: (_, callback) => {
        const fakeDB = generateFakeDB();
        console.log('FAKE DB: ', fakeDB);
        callback(null, fakeDB);
    }
});

server.bind(local_server, grpc.ServerCredentials.createInsecure());

console.log(`Server running at ${local_server}`);
server.start();