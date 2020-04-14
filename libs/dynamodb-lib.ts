import { DocumentClient } from "aws-sdk/clients/dynamodb";

let config = {};
if (process.env.IS_OFFLINE) {
  config = {
    endpoint: "http://localhost:8000",
    region: "localhost",
  };
}

if (process.env.JEST_WORKER_ID) {
  config = {
    convertEmptyValues: true,
    endpoint: "http://localhost:8000",
    sslEnabled: false,
    region: "local-env",
  };
}

const client = new DocumentClient(config);

export default {
  get: (params: any) => client.get(params).promise(),
  put: (params: any) => client.put(params).promise(),
  query: (params: any) => client.query(params).promise(),
  update: (params: any) => client.update(params).promise(),
  delete: (params: any) => client.delete(params).promise(),
};
