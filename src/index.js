const {
  GraphQLServer
} = require("graphql-yoga");
const glue = require("schemaglue");

const {
  schema,
  resolver
} = glue('src/graphql');

const server = new GraphQLServer({
  typeDefs: schema,
  resolvers: resolver
});

server.start(() => console.log(`Server is running on http://localhost:4000`));