import { ApolloServer, gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from Apollo',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

export const handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
