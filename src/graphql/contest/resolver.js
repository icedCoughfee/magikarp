const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllContestTypes: (parent, args) => getAllConnections("/contest-type", args),
        getContestType: (parent, args) => {
            return getByIdOrName("/contest-type", args);
        },
        getAllContestEffects: (parent, args) => getAllConnections("/contest-effect", args),
        getContestEffect: (parent, args) => {
            return getByIdOrName("/contest-effect", args);
        },
        getAllSuperContestEffects: (parent, args) => getAllConnections("/super-contest-effect", args),
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