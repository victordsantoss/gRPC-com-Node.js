const grpc = require('grpc');
const elementsProto = grpc.load('elements.proto');
const generateFakeDB = require('./utils/fakeDB');
const port = 5051;

const server = new grpc.Server();
server.addService(elementsProto.ElementService.service, {
    List: (_, callback) => {
        const fakeDB = generateFakeDB();
        console.log('FAKE DB: ', fakeDB);
        callback(null, fakeDB);
    }
});

server.bind(`127.0.0.1:${port}`, grpc.ServerCredentials.createInsecure());

console.log(`Server running at http://127.0.0.1:${port}`);
server.start();