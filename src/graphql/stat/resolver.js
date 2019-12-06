const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllStats: (parent, args) => getAllConnections("/stat", args),
        getStat: (parent, args) => {
            return getByIdOrName("/stat", args);
        }
    },
    StatConnection: {
        node: obj => getNode(obj)
    }
}