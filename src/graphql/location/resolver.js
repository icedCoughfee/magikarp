const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllLocations: () => getAllConnections("/location"),
        getLocation: (parent, args) => {
            return getByIdOrName("/location", args);
        },
        getAllLocationAreas: () => getAllConnections("/location-area"),
        getLocationArea: (parent, args) => {
            return getByIdOrName("/location-area", args);
        },
        getAllPalParkAreas: () => getAllConnections("/pal-park-area"),
        getPalParkArea: (parent, args) => {
            return getByIdOrName("/pal-park-area", args);
        },
        getAllRegions: () => getAllConnections("/region"),
        getRegion: (parent, args) => {
            return getByIdOrName("/region", args);
        },
        getAllMachines: () => getAllConnections("/machine"),
        getMachine: (parent, args) => {
            return getByIdOrName("/machine", args);
        }
    },
    LocationConnection: {
        node: obj => getNode(obj)
    },
    LocationAreaConnection: {
        node: obj => getNode(obj)
    },
    PalParkAreaConnection: {
        node: obj => getNode(obj)
    },
    RegionConnection: {
        node: obj => getNode(obj)
    },
}