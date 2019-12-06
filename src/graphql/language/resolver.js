const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllLanguages: (parent, args) => getAllConnections("/language", args),
        getLanguage: (parent, args) => {
            return getByIdOrName("/language", args);
        }
    },
    LanguageConnection: {
        node: obj => getNode(obj)
    }
}