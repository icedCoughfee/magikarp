const {getAllConnections, getByIdOrName} = require('../utils/resolverHelper');
const {generateTrivialResolvers} = require('../utils/resolverGenerator');

const connections = ['LanguageConnection'];

exports.resolver = {
  Query: {
    getAllLanguages: (parent, args) => getAllConnections('/language', args),
    getLanguage: (parent, args) => {
      return getByIdOrName('/language', args);
    },
  },
  ...generateTrivialResolvers(connections),
};
