const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllStats: () => getAllConnections("/stat"),
        getStat: (parent, args) => {
            return getByIdOrName("/stat", args);
        }
    },
    StatConnection: {
        node: obj => getNode(obj)
    }
}