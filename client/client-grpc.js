const grpc = require('grpc');
const PROTO_PATH = '../elements.proto';
const local_server = require('../utils/global_constants');

const ElementService = grpc.load(PROTO_PATH).ElementService;

const client = new ElementService(local_server, grpc.credentials.createInsecure());
module.exports = client