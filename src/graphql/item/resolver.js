const {getAllConnections, getByIdOrName} = require('../utils/resolverHelper');
const {generateTrivialResolvers} = require('../utils/resolverGenerator');

const connections = [
  'ItemConnection',
  'ItemAttributeConnection',
  'ItemCategoryConnection',
  'ItemFlingEffectConnection',
  'ItemPocketConnection',
];

exports.resolver = {
  Query: {
    getAllItems: (parent, args) => getAllConnections('/item', args),
    getItem: (parent, args) => {
      return getByIdOrName('/item', args);
    },
    getAllItemAttributes: (parent, args) =>
      getAllConnections('/item-attribute', args),
    getItemAttribute: (parent, args) => {
      return getByIdOrName('/item-attribute', args);
    },
    getAllItemCategories: (parent, args) =>
      getAllConnections('/item-category', args),
    getItemCategory: (parent, args) => {
      return getByIdOrName('/item-category', args);
    },
    getAllItemFlingEffects: (parent, args) =>
      getAllConnections('/item-fling-effect', args),
    getItemFlingEffect: (parent, args) => {
      return getByIdOrName('/item-fling-effect', args);
    },
    getAllItemPockets: (parent, args) =>
      getAllConnections('/item-pocket', args),
    getItemPocket: (parent, args) => {
      return getByIdOrName('/item-pocket', args);
    },
  },
  ...generateTrivialResolvers(connections),
};
