const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllBerries: (parent, args) => getAllConnections("/berry", args),
        getBerry: (parent, args) => {
            return getByIdOrName("/berry", args);
        },
        getAllBerryFirmness: (parent, args) => getAllConnections("/berry-firmness", args),
        getBerryFirmness: (parent, args) => {
            return getByIdOrName("/berry-firmness", args);
        },
        getAllBerryFlavors: (parent, args) => getAllConnections("/berry-flavor", args),
        getBerryFlavor: (parent, args) => {
            return getByIdOrName("/berry-flavor", args);
        }
    },
    BerryConnection: {
        node: obj => getNode(obj)
    },
    BerryFirmnessConnection: {
        node: obj => getNode(obj)
    },
    BerryFlavorConnection: {
        node: obj => getNode(obj)
    }
}