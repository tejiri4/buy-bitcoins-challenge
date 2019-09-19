import { ApolloServer } from 'apollo-server-express';

// schema
import priceSchema from '../schema/priceSchema';

// resolver
import priceResolver from '../resolver/priceResolver';

const server = new ApolloServer({
  typeDefs: priceSchema,
  resolvers: priceResolver,
  introspection: true,
  playground: {
    endpoint: '/graphql',
  },
});

export default server;
