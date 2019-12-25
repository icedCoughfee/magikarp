const {getAllConnections, getByIdOrName} = require('../utils/resolverHelper');
const {generateTrivialResolvers} = require('../utils/resolverGenerator');

const connections = [
  'BerryConnection',
  'BerryFirmnessConnection',
  'BerryFlavorConnection'
];

exports.resolver = {
  Query: {
    getAllBerries: (parent, args) => getAllConnections('/berry', args),
    getBerry: (parent, args) => {
      return getByIdOrName('/berry', args);
    },
    getAllBerryFirmness: (parent, args) =>
      getAllConnections('/berry-firmness', args),
    getBerryFirmness: (parent, args) => {
      return getByIdOrName('/berry-firmness', args);
    },
    getAllBerryFlavors: (parent, args) =>
      getAllConnections('/berry-flavor', args),
    getBerryFlavor: (parent, args) => {
      return getByIdOrName('/berry-flavor', args);
    }
  },
  ...generateTrivialResolvers(connections)
};
