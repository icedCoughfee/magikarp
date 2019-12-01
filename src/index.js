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
