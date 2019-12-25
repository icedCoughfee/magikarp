const {getAllConnections, getByIdOrName} = require('../utils/resolverHelper');
const {generateTrivialResolvers} = require('../utils/resolverGenerator');

const connections = [
  'AbilityConnection',
  'CharacteristicConnection',
  'EggGroupConnection',
  'GenderConnection',
  'GrowthRateConnection',
  'NatureConnection',
  'PokeathlonStatConnection',
  'PokemonConnection',
  'PokemonColorConnection',
  'PokemonFormConnection',
  'PokemonHabitatConnection',
  'PokemonShapeConnection',
  'PokemonSpeciesConnection',
];

exports.resolver = {
  Query: {
    getAllAbilities: (parent, args) => getAllConnections('/ability', args),
    getAbility: (parent, args) => {
      return getByIdOrName('/ability', args);
    },
    getAllCharacteristics: (parent, args) =>
      getAllConnections('/characteristic', args),
    getCharacteristic: (parent, args) => {
      return getByIdOrName('/characteristic', args);
    },
    getAllEggGroups: (parent, args) => getAllConnections('/egg-group', args),
    getEggGroup: (parent, args) => {
      return getByIdOrName('/egg-group', args);
    },
    getAllGenders: (parent, args) => getAllConnections('/gender', args),
    getGender: (parent, args) => {
      return getByIdOrName('/gender', args);
    },
    getAllGrowthRates: (parent, args) =>
      getAllConnections('/growth-rate', args),
    getGrowthRate: (parent, args) => {
      return getByIdOrName('/growth-rate', args);
    },
    getAllNatures: (parent, args) => getAllConnections('/nature', args),
    getNature: (parent, args) => {
      return getByIdOrName('/nature', args);
    },
    getAllPokeathlonStats: (parent, args) =>
      getAllConnections('/pokeathlon-stat', args),
    getPokeathlonStat: (parent, args) => {
      return getByIdOrName('/pokeathlon-stat', args);
    },
    getAllPokemon: (parent, args) => getAllConnections('/pokemon', args),
    getPokemon: (parent, args) => {
      return getByIdOrName('/pokemon', args);
    },
    getAllPokemonColors: (parent, args) =>
      getAllConnections('/pokemon-color', args),
    getPokemonColor: (parent, args) => {
      return getByIdOrName('/pokemon-color', args);
    },
    getAllPokemonForms: (parent, args) =>
      getAllConnections('/pokemon-form', args),
    getPokemonForm: (parent, args) => {
      return getByIdOrName('/pokemon-form', args);
    },
    getAllPokemonHabitats: (parent, args) =>
      getAllConnections('/pokemon-habitat', args),
    getPokemonHabitat: (parent, args) => {
      return getByIdOrName('/pokemon-habitat', args);
    },
    getAllPokemonShapes: (parent, args) =>
      getAllConnections('/pokemon-shape', args),
    getPokemonShape: (parent, args) => {
      return getByIdOrName('/pokemon-shape', args);
    },
    getAllPokemonSpecies: (parent, args) =>
      getAllConnections('/pokemon-species', args),
    getPokemonSpecies: (parent, args) => {
      return getByIdOrName('/pokemon-species', args);
    },
  },
  ...generateTrivialResolvers(connections),
};
