const fetch = require('node-fetch');
const baseURL = `https://pokeapi.co/api/v2`;

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

// resolve all connection references
const getAllNodes = async (urlPath, args) => {
  const connections = await getAllConnections(urlPath, args);
  return connections.map(async c => {
    return await getNode(c);
  });
};

// calls that return Connections (reference list {name, url})
const getAllConnections = (urlPath, args) => {
  let pagination = '';
  if (args) {
    const {limit, offset} = args;
    if (limit && offset) {
      pagination = `?limit=${limit}&offset=${offset}`;
    }
  }

  try {
    return fetch(`${baseURL}/${urlPath}${pagination}`)
      .then(res => res.json())
      .then(res => res.results)
      .catch(err => console.log(err));
  } catch (err) {
    return Promise.reject(err);
  }
};

const getByIdOrName = (urlPath, args) => {
  const {id, name} = args;
  try {
    if (!id && !name) {
      throw new Error('Please provide the Pokemon Id (Int) or Name (String)');
    }
    return fetch(`${baseURL}/${urlPath}/${id || name}`).then(res => res.json());
  } catch (err) {
    return Promise.reject(err);
  }
};

const trivialResolverNode = {
  node: obj => getNode(obj)
};

module.exports = {
  getAllConnections,
  getAllNodes,
  getByIdOrName,
  trivialResolverNode
};
