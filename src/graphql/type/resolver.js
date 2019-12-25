const {getAllConnections, getByIdOrName} = require('../utils/resolverHelper');
const {generateTrivialResolvers} = require('../utils/resolverGenerator');

const connections = ['TypeConnection'];

exports.resolver = {
  Query: {
    getAllTypes: (parent, args) => getAllConnections('/type', args),
    getType: (parent, args) => {
      return getByIdOrName('/type', args);
    }
  },
  ...generateTrivialResolvers(connections)
};
