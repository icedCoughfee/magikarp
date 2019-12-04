const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllItems: () => getAllConnections("/item"),
        getItem: (parent, args) => {
            return getByIdOrName("/item", args);
        },
        getAllItemAttributes: () => getAllConnections("/item-attribute"),
        getItemAttribute: (parent, args) => {
            return getByIdOrName("/item-attribute", args);
        },
        getAllItemCategories: () => getAllConnections("/item-category"),
        getItemCategory: (parent, args) => {
            return getByIdOrName("/item-category", args);
        },
        getAllItemFlingEffects: () => getAllConnections("/item-fling-effect"),
        getItemFlingEffect: (parent, args) => {
            return getByIdOrName("/item-fling-effect", args);
        },
        getAllItemPockets: () => getAllConnections("/item-pocket"),
        getItemPocket: (parent, args) => {
            return getByIdOrName("/item-pocket", args);
        }
    },
    ItemConnection: {
        node: obj => getNode(obj)
    },
    ItemAttributeConnection: {
        node: obj => getNode(obj)
    },
    ItemCategoryConnection: {
        node: obj => getNode(obj)
    },
    ItemFlingEffectConnection: {
        node: obj => getNode(obj)
    },
    ItemPocketConnection: {
        node: obj => getNode(obj)
    }
}