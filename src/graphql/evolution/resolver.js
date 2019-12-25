const {
    getAllConnections,
    getByIdOrName
} = require('../utils/resolverHelper');
const {
    generateTrivialResolvers
} = require('../utils/resolverGenerator');

const connections = ['EvolutionChainConnection', 'EvolutionTriggerConnection'];

exports.resolver = {
    Query: {
        getAllEvolutionChains: (parent, args) =>
            getAllConnections('/evolution-chain', args),
        getEvolutionChain: (parent, args) => {
            return getByIdOrName('/evolution-chain', args);
        },
        getAllEvolutionTriggers: (parent, args) =>
            getAllConnections('/evolution-trigger', args),
        getEvolutionTrigger: (parent, args) => {
            return getByIdOrName('/evolution-trigger', args);
        },
    },
    ...generateTrivialResolvers(connections),
};