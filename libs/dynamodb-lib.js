import AWS from "aws-sdk";

let config = {};
if (process.env.IS_OFFLINE) {
  config = {
    endpoint: "localhost:8000",
    region: "localhose",
  };
}

if (process.env.JEST_WORKER_ID) {
  config = {
    convertEmptyValues: true,
    endpoint: "localhost:8000",
    sslEnabled: false,
    region: "local-env",
  };
}

const client = new AWS.DynamoDB.DocumentClient(config);

export default {
  get: (params) => client.get(params).promise(),
  put: (params) => client.put(params).promise(),
  query: (params) => client.query(params).promise(),
  update: (params) => client.update(params).promise(),
  delete: (params) => client.delete(params).promise(),
};
