const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllMachines: (parent, args) => getAllConnections("/machine", args),
        getMachine: (parent, args) => {
            return getByIdOrName("/machine", args);
        }
    },
    MachineConnection: {
        node: obj => getNode(obj)
    }
}