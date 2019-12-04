const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllEvolutionChains: () => getAllConnections("/evolution-chain"),
        getEvolutionChain: (parent, args) => {
            return getByIdOrName("/evolution-chain", args);
        },
        getAllEvolutionTriggers: () => getAllConnections("/evolution-trigger"),
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