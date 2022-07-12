const grpc = require('grpc');
const PROTO_PATH = '../elements.proto';
const ElementService = grpc.load(PROTO_PATH).ElementService;

const client = new ElementService('localhost:5051', grpc.credentials.createInsecure());
module.exports = client