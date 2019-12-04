const {
    getNode,
    getAllConnections,
    getByIdOrName
} = require("../utils/resolverHelper");

exports.resolver = {
    Query: {
        getAllAbilities: () => getAllConnections("/ability"),
        getAbility: (parent, args) => {
            return getByIdOrName("/ability", args);
        },
        getAllCharacteristics: () => getAllConnections("/characteristic"),
        getCharacteristic: (parent, args) => {
            return getByIdOrName("/characteristic", args);
        },
        getAllEggGroups: () => getAllConnections("/egg-group"),
        getEggGroup: (parent, args) => {
            return getByIdOrName("/egg-group", args);
        },
        getAllGenders: () => getAllConnections("/gender"),
        getGender: (parent, args) => {
            return getByIdOrName("/gender", args);
        },
        getAllGrowthRates: () => getAllConnections("/growth-rate"),
        getGrowthRate: (parent, args) => {
            return getByIdOrName("/growth-rate", args);
        },
        getAllNatures: () => getAllConnections("/nature"),
        getNature: (parent, args) => {
            return getByIdOrName("/nature", args);
        },
        getAllPokeathlonStats: () => getAllConnections("/pokeathlon-stat"),
        getPokeathlonStat: (parent, args) => {
            return getByIdOrName("/pokeathlon-stat", args);
        },
        getAllPokemon: () => getAllConnections("/pokemon"),
        getPokemon: (parent, args) => {
            return getByIdOrName("/pokemon", args);
        },
        getAllPokemonColors: () => getAllConnections("/pokemon-color"),
        getPokemonColor: (parent, args) => {
            return getByIdOrName("/pokemon-color", args);
        },
        getAllPokemonForms: () => getAllConnections("/pokemon-form"),
        getPokemonForm: (parent, args) => {
            return getByIdOrName("/pokemon-form", args);
        },
        getAllPokemonHabitats: () => getAllConnections("/pokemon-habitat"),
        getPokemonHabitat: (parent, args) => {
            return getByIdOrName("/pokemon-habitat", args);
        },
        getAllPokemonShapes: () => getAllConnections("/pokemon-shape"),
        getPokemonShape: (parent, args) => {
            return getByIdOrName("/pokemon-shape", args);
        },
        getAllPokemonSpecies: () => getAllConnections("/pokemon-species"),
        getPokemonSpecies: (parent, args) => {
            return getByIdOrName("/pokemon-species", args);
        }
    },
    AbilityConnection: {
        node: obj => getNode(obj)
    },
    CharacteristicConnection: {
        node: obj => getNode(obj)
    },
    EggGroupConnection: {
        node: obj => getNode(obj)
    },
    GenderConnection: {
        node: obj => getNode(obj)
    },
    GrowthRateConnection: {
        node: obj => getNode(obj)
    },
    NatureConnection: {
        node: obj => getNode(obj)
    },
    PokeathlonStatConnection: {
        node: obj => getNode(obj)
    },
    PokemonConnection: {
        node: obj => getNode(obj)
    },
    PokemonColorConnection: {
        node: obj => getNode(obj)
    },
    PokemonFormConnection: {
        node: obj => getNode(obj)
    },
    PokemonHabitatConnection: {
        node: obj => getNode(obj)
    },
    PokemonShapeConnection: {
        node: obj => getNode(obj)
    },
    PokemonSpeciesConnection: {
        node: obj => getNode(obj)
    }
}