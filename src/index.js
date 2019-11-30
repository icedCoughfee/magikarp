const { GraphQLServer } = require("graphql-yoga");
const fetch = require("node-fetch");

const baseURL = `https://pokeapi.co/api/v2`;

const resolvers = {
  // Query will house our "Root Resolvers" or entry points into the API
  // Any queries on the same level as the "Root Resolver" will simply be resolvers that can resolve references to that type deeper than the root.
  // For example a property value with a list of ParticularType can be resolved by GraphQL given the ParticularType resolver on the same level as the root.
  Query: {
    // BERRIES
    AllBerries: () => getAllConnections("/berry"),
    Berry: (parent, args) => {
      return getByIdOrName("/berry", args);
    },
    AllBerryFirmness: () => getAllConnections("/berry-firmness"),
    BerryFirmness: (parent, args) => {
      return getByIdOrName("/berry-firmness", args);
    },
    AllBerryFlavors: () => getAllConnections("/berry-flavor"),
    BerryFlavor: (parent, args) => {
      return getByIdOrName("/berry-flavor", args);
    },
    // CONTESTS
    AllContestTypes: () => getAllConnections("/contest-type"),
    ContestType: (parent, args) => {
      return getByIdOrName("/contest-type", args);
    }
  },
  BerryConnection: {
    node: obj => getNode(obj)
  },
  BerryFirmnessConnection: {
    node: obj => getNode(obj)
  },
  BerryFlavorsConnection: {
    node: obj => getNode(obj)
  },
  ContestTypeConnection: {
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
