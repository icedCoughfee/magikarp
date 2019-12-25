const {trivialResolverNode} = require('./resolverHelper');

function generateTrivialResolvers(typeList) {
  const resolvers = {};
  for (const type of typeList) {
    resolvers[type] = trivialResolverNode;
  }
  return resolvers;
}

module.exports = {
  generateTrivialResolvers
};
