const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllGenerations: (parent, args) => getAllConnections("/generation", args),
        getGeneration: (parent, args) => {
            return getByIdOrName("/generation", args);
        },
        getAllPokedexes: (parent, args) => getAllConnections("/pokedex", args),
        getPokedex: (parent, args) => {
            return getByIdOrName("/pokedex", args);
        },
        getAllVersions: (parent, args) => getAllConnections("/version", args),
        getVersion: (parent, args) => {
            return getByIdOrName("/version", args);
        },
        getAllVersionGroups: (parent, args) => getAllConnections("/version-group", args),
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