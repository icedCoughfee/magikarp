const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllContestTypes: () => getAllConnections("/contest-type"),
        getContestType: (parent, args) => {
            return getByIdOrName("/contest-type", args);
        },
        getAllContestEffects: () => getAllConnections("/contest-effect"),
        getContestEffect: (parent, args) => {
            return getByIdOrName("/contest-effect", args);
        },
        getAllSuperContestEffects: () => getAllConnections("/super-contest-effect"),
        getSuperContestEffect: (parent, args) => {
            return getByIdOrName("/super-contest-effect", args);
        }
    },
    ContestTypeConnection: {
        node: obj => getNode(obj)
    },
    ContestEffectConnection: {
        node: obj => getNode(obj)
    },
    SuperContestEffectConnection: {
        node: obj => getNode(obj)
    }
}