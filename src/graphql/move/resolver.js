const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllMoves: () => getAllConnections("/move"),
        getMove: (parent, args) => {
            return getByIdOrName("/move", args);
        },
        getAllMoveAilments: () => getAllConnections("/move-ailment"),
        getMoveAilment: (parent, args) => {
            return getByIdOrName("/move-ailment", args);
        },
        getAllMoveBattleStyles: () => getAllConnections("/move-battle-style"),
        getMoveBattleStyle: (parent, args) => {
            return getByIdOrName("/move-battle-style", args);
        },
        getAllMoveCategories: () => getAllConnections("/move-category"),
        getMoveCategory: (parent, args) => {
            return getByIdOrName("/move-category", args);
        },
        getAllMoveDamageClasses: () => getAllConnections("/move-damage-class"),
        getMoveDamageClass: (parent, args) => {
            return getByIdOrName("/move-damage-class", args);
        },
        getAllMoveLearnMethods: () => getAllConnections("/move-learn-method"),
        getMoveLearnMethod: (parent, args) => {
            return getByIdOrName("/move-learn-method", args);
        },
        getAllMoveTargets: () => getAllConnections("/move-target"),
        getMoveTarget: (parent, args) => {
            return getByIdOrName("/move-target", args);
        }
    },
    MoveConnection: {
        node: obj => getNode(obj)
    },
    MoveAilmentConnection: {
        node: obj => getNode(obj)
    },
    MoveBattleStyleConnection: {
        node: obj => getNode(obj)
    },
    MoveCategoryConnection: {
        node: obj => getNode(obj)
    },
    MoveDamageClassConnection: {
        node: obj => getNode(obj)
    },
    MoveLearnMethodConnection: {
        node: obj => getNode(obj)
    },
    MoveTargetConnection: {
        node: obj => getNode(obj)
    }
}