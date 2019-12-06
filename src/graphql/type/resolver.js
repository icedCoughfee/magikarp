const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllTypes: (parent, args) => getAllConnections("/type", args),
        getType: (parent, args) => {
            return getByIdOrName("/type", args);
        }
    },
    TypeConnection: {
        node: obj => getNode(obj)
    }
}