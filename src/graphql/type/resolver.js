const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllTypes: () => getAllConnections("/type"),
        getType: (parent, args) => {
            return getByIdOrName("/type", args);
        }
    },
    TypeConnection: {
        node: obj => getNode(obj)
    }
}