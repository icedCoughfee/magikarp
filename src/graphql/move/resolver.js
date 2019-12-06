const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllMoves: (parent, args) => getAllConnections("/move", args),
        getMove: (parent, args) => {
            return getByIdOrName("/move", args);
        },
        getAllMoveAilments: (parent, args) => getAllConnections("/move-ailment", args),
        getMoveAilment: (parent, args) => {
            return getByIdOrName("/move-ailment", args);
        },
        getAllMoveBattleStyles: (parent, args) => getAllConnections("/move-battle-style", args),
        getMoveBattleStyle: (parent, args) => {
            return getByIdOrName("/move-battle-style", args);
        },
        getAllMoveCategories: (parent, args) => getAllConnections("/move-category", args),
        getMoveCategory: (parent, args) => {
            return getByIdOrName("/move-category", args);
        },
        getAllMoveDamageClasses: (parent, args) => getAllConnections("/move-damage-class", args),
        getMoveDamageClass: (parent, args) => {
            return getByIdOrName("/move-damage-class", args);
        },
        getAllMoveLearnMethods: (parent, args) => getAllConnections("/move-learn-method", args),
        getMoveLearnMethod: (parent, args) => {
            return getByIdOrName("/move-learn-method", args);
        },
        getAllMoveTargets: (parent, args) => getAllConnections("/move-target", args),
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