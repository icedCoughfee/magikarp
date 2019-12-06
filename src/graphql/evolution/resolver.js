const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllEvolutionChains: (parent, args) => getAllConnections("/evolution-chain", args),
        getEvolutionChain: (parent, args) => {
            return getByIdOrName("/evolution-chain", args);
        },
        getAllEvolutionTriggers: (parent, args) => getAllConnections("/evolution-trigger", args),
        getEvolutionTrigger: (parent, args) => {
            return getByIdOrName("/evolution-trigger", args);
        }
    },
    EvolutionChainConnection: {
        node: obj => getNode(obj)
    },
    EvolutionTriggerConnection: {
        node: obj => getNode(obj)
    }
}