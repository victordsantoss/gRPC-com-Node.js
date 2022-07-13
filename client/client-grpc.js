const grpc = require('grpc');
const PROTO_PATH = '../elements.proto';
const {local_server} = require('../utils/global_constants');
const ElementService = grpc.load(PROTO_PATH).ElementService;

let client = new ElementService(local_server, grpc.credentials.createInsecure(), {
    "grpc.max_receive_message_length": 1024 * 1024 * 200,
    "grpc.max_send_message_length": 1024 * 1024 * 200
});

module.exports = client