const {getAllConnections, getByIdOrName} = require('../utils/resolverHelper');
const {generateTrivialResolvers} = require('../utils/resolverGenerator');

const connections = ['MachineConnection'];

exports.resolver = {
  Query: {
    getAllMachines: (parent, args) => getAllConnections('/machine', args),
    getMachine: (parent, args) => {
      return getByIdOrName('/machine', args);
    },
  },
  ...generateTrivialResolvers(connections),
};
