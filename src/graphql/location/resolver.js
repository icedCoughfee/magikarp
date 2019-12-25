const {getAllConnections, getByIdOrName} = require('../utils/resolverHelper');
const {generateTrivialResolvers} = require('../utils/resolverGenerator');

const connections = [
  'LocationConnection',
  'LocationAreaConnection',
  'PalParkAreaConnection',
  'RegionConnection',
];

exports.resolver = {
  Query: {
    getAllLocations: (parent, args) => getAllConnections('/location', args),
    getLocation: (parent, args) => {
      return getByIdOrName('/location', args);
    },
    getAllLocationAreas: (parent, args) =>
      getAllConnections('/location-area', args),
    getLocationArea: (parent, args) => {
      return getByIdOrName('/location-area', args);
    },
    getAllPalParkAreas: (parent, args) =>
      getAllConnections('/pal-park-area', args),
    getPalParkArea: (parent, args) => {
      return getByIdOrName('/pal-park-area', args);
    },
    getAllRegions: (parent, args) => getAllConnections('/region', args),
    getRegion: (parent, args) => {
      return getByIdOrName('/region', args);
    },
    getAllMachines: (parent, args) => getAllConnections('/machine', args),
    getMachine: (parent, args) => {
      return getByIdOrName('/machine', args);
    },
  },
  ...generateTrivialResolvers(connections),
};
