const {getAllConnections, getByIdOrName} = require('../utils/resolverHelper');
const {generateTrivialResolvers} = require('../utils/resolverGenerator');

const connections = [
  'EncounterMethodConnection',
  'EncounterConditionConnection',
  'EncounterConditionValueConnection',
];

exports.resolver = {
  Query: {
    getAllEncounterMethods: (parent, args) =>
      getAllConnections('/encounter-method', args),
    getEncounterMethod: (parent, args) => {
      return getByIdOrName('/encounter-method', args);
    },
    getAllEncounterConditions: (parent, args) =>
      getAllConnections('/encounter-condition', args),
    getEncounterCondition: (parent, args) => {
      return getByIdOrName('/encounter-condition', args);
    },
    getAllEncounterConditionValues: (parent, args) =>
      getAllConnections('/encounter-condition-value', args),
    getEncounterConditionValue: (parent, args) => {
      return getByIdOrName('/encounter-condition-value', args);
    },
  },
  ...generateTrivialResolvers(connections),
};
