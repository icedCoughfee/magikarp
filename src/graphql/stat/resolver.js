const {getAllConnections, getByIdOrName} = require('../utils/resolverHelper');
const {generateTrivialResolvers} = require('../utils/resolverGenerator');

const connections = ['StatConnection'];

exports.resolver = {
  Query: {
    getAllStats: (parent, args) => getAllConnections('/stat', args),
    getStat: (parent, args) => {
      return getByIdOrName('/stat', args);
    }
  },
  ...generateTrivialResolvers(connections)
};
