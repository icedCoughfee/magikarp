const { GraphQLServer } = require("graphql-yoga");
const fetch = require("node-fetch");

const baseURL = `https://pokeapi.co/api/v2`;

const resolvers = {
  // Query will house our "Root Resolvers" or entry points into the API
  // Any queries on the same level as the "Root Resolver" will simply be resolvers that can resolve references to that type deeper than the root.
  // For example a property value with a list of ParticularType can be resolved by GraphQL given the ParticularType resolver on the same level as the root.
  Query: {
    // BERRIES
    getAllBerries: () => getAllConnections("/berry"),
    getBerry: (parent, args) => {
      return getByIdOrName("/berry", args);
    },
    getAllBerryFirmness: () => getAllConnections("/berry-firmness"),
    getBerryFirmness: (parent, args) => {
      return getByIdOrName("/berry-firmness", args);
    },
    getAllBerryFlavors: () => getAllConnections("/berry-flavor"),
    getBerryFlavor: (parent, args) => {
      return getByIdOrName("/berry-flavor", args);
    },
    // CONTESTS
    getAllContestTypes: () => getAllConnections("/contest-type"),
    getContestType: (parent, args) => {
      return getByIdOrName("/contest-type", args);
    },
    getAllContestEffects: () => getAllConnections("/contest-effect"),
    getContestEffect: (parent, args) => {
      return getByIdOrName("/contest-effect", args);
    },
    getAllSuperContestEffects: () => getAllConnections("/super-contest-effect"),
    getSuperContestEffect: (parent, args) => {
      return getByIdOrName("/super-contest-effect", args);
    },
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
    },
    getAllEvolutionChains: () => getAllConnections("/evolution-chain"),
    getEvolutionChain: (parent, args) => {
      return getByIdOrName("/evolution-chain", args);
    },
    getAllEvolutionTriggers: () => getAllConnections("/evolution-trigger"),
    getEvolutionTrigger: (parent, args) => {
      return getByIdOrName("/evolution-trigger", args);
    },
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
    },
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
    },
    getAllLocations: () => getAllConnections("/location"),
    getLocation: (parent, args) => {
      return getByIdOrName("/location", args);
    },
    getAllLocationAreas: () => getAllConnections("/location-area"),
    getLocationArea: (parent, args) => {
      return getByIdOrName("/location-area", args);
    },
    getAllPalParkAreas: () => getAllConnections("/pal-park-area"),
    getPalParkArea: (parent, args) => {
      return getByIdOrName("/pal-park-area", args);
    },
    getAllRegions: () => getAllConnections("/region"),
    getRegion: (parent, args) => {
      return getByIdOrName("/region", args);
    },
    getAllMachines: () => getAllConnections("/machine"),
    getMachine: (parent, args) => {
      return getByIdOrName("/machine", args);
    },
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
    // LANGUAGES
    getAllLanguages: () => getAllConnections("/language"),
    getLanguage: (parent, args) => {
      return getByIdOrName("/language", args);
    }
  },
  BerryConnection: {
    node: obj => getNode(obj)
  },
  BerryFirmnessConnection: {
    node: obj => getNode(obj)
  },
  BerryFlavorConnection: {
    node: obj => getNode(obj)
  },
  ContestTypeConnection: {
    node: obj => getNode(obj)
  },
  ContestEffectConnection: {
    node: obj => getNode(obj)
  },
  SuperContestEffectConnection: {
    node: obj => getNode(obj)
  },
  EncounterMethodConnection: {
    node: obj => getNode(obj)
  },
  EncounterConditionConnection: {
    node: obj => getNode(obj)
  },
  EncounterConditionValueConnection: {
    node: obj => getNode(obj)
  },
  EvolutionChainConnection: {
    node: obj => getNode(obj)
  },
  EvolutionTriggerConnection: {
    node: obj => getNode(obj)
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
  },
  LocationConnection: {
    node: obj => getNode(obj)
  },
  LocationAreaConnection: {
    node: obj => getNode(obj)
  },
  PalParkAreaConnection: {
    node: obj => getNode(obj)
  },
  RegionConnection: {
    node: obj => getNode(obj)
  },
  MachineConnection: {
    node: obj => getNode(obj)
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
  LanguageConnection: {
    node: obj => getNode(obj)
  }
};

// common resolve function for all "nodes"
const getNode = obj => {
  try {
    return fetch(obj.url)
      .then(res => res.json())
      .catch(err => console.log(err));
  } catch (err) {
    return Promise.reject(err);
  }
};

// calls that return Connections (reference list {name, url})
const getAllConnections = urlPath => {
  try {
    return fetch(`${baseURL}/${urlPath}`)
      .then(res => res.json())
      .then(res => res.results)
      .catch(err => console.log(err));
  } catch (err) {
    return Promise.reject(err);
  }
};

const getByIdOrName = (urlPath, args) => {
  const { id, name } = args;
  try {
    if (!id && !name) {
      throw new Error("Please provide the Pokemon Id (Int) or Name (String)");
    }
    return fetch(`${baseURL}/${urlPath}/${id || name}`).then(res => res.json());
  } catch (err) {
    return Promise.reject(err);
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
