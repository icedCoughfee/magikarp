const { GraphQLServer } = require("graphql-yoga");
const glue = require("schemaglue");

const { schema, resolver } = glue("src/graphql");

require("./logging/schemaLogger")(schema);

const server = new GraphQLServer({
  typeDefs: schema,
  resolvers: resolver
});

const options = {
  port: 4000,
  playground: "/",
  endpoint: "/graphql"
};

server.start(options, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`)
);
