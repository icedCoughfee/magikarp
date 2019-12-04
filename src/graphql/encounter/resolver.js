const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllEncounterMethods: () => getAllConnections("/encounter-method"),
        getEncounterMethod: (parent, args) => {
            return getByIdOrName("/encounter-method", args);
        },
        getAllEncounterConditions: () => getAllConnections("/encounter-condition"),
        getEncounterCondition: (parent, args) => {
            return getByIdOrName("/encounter-condition", args);
        },
        getAllEncounterConditionValues: () =>
            getAllConnections("/encounter-condition-value"),
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