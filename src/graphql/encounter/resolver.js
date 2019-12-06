const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllEncounterMethods: (parent, args) => getAllConnections("/encounter-method", args),
        getEncounterMethod: (parent, args) => {
            return getByIdOrName("/encounter-method", args);
        },
        getAllEncounterConditions: (parent, args) => getAllConnections("/encounter-condition", args),
        getEncounterCondition: (parent, args) => {
            return getByIdOrName("/encounter-condition", args);
        },
        getAllEncounterConditionValues: (parent, args) =>
            getAllConnections("/encounter-condition-value", args),
        getEncounterConditionValue: (parent, args) => {
            return getByIdOrName("/encounter-condition-value", args);
        }
    },
    EncounterMethodConnection: {
        node: obj => getNode(obj)
    },
    EncounterConditionConnection: {
        node: obj => getNode(obj)
    },
    EncounterConditionValueConnection: {
        node: obj => getNode(obj)
    }
}