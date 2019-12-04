const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllGenerations: () => getAllConnections("/generation"),
        getGeneration: (parent, args) => {
            return getByIdOrName("/generation", args);
        },
        getAllPokedexes: () => getAllConnections("/pokedex"),
        getPokedex: (parent, args) => {
            return getByIdOrName("/pokedex", args);
        },
        getAllVersions: () => getAllConnections("/version"),
        getVersion: (parent, args) => {
            return getByIdOrName("/version", args);
        },
        getAllVersionGroups: () => getAllConnections("/version-group"),
        getVersionGroup: (parent, args) => {
            return getByIdOrName("/version-group", args);
        }
    },
    GenerationConnection: {
        node: obj => getNode(obj)
    },
    PokedexConnection: {
        node: obj => getNode(obj)
    },
    VersionConnection: {
        node: obj => getNode(obj)
    },
    VersionGroupConnection: {
        node: obj => getNode(obj)
    },
}