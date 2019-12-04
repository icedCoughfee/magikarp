const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllLanguages: () => getAllConnections("/language"),
        getLanguage: (parent, args) => {
            return getByIdOrName("/language", args);
        }
    },
    LanguageConnection: {
        node: obj => getNode(obj)
    }
}