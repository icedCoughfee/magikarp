const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllBerries: () => getAllConnections("/berry"),
        getBerry: (parent, args) => {
            return getByIdOrName("/berry", args);
        },
        getAllBerryFirmness: () => getAllConnections("/berry-firmness"),
        getBerryFirmness: (parent, args) => {
            return getByIdOrName("/berry-firmness", args);
        },
        getAllBerryFlavors: () => getAllConnections("/berry-flavor"),
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