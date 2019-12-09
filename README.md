# magikarp

Magikarp is a GraphQL API wrapper for the public [PokeAPI](https://pokeapi.co/) REST API. It is built on top of a [Nikolas Burk's](https://github.com/nikolasburk) GraphQL [boilerplate](https://github.com/nikolasburk/graphql-rest-wrapper). His example guide can be found [here](https://medium.com/@graphcool/how-to-wrap-a-rest-api-with-graphql-8bf3fb17547d).

<p align="center">
  <img width="594" height="370" src="http://cdn.pastemagazine.com/www/articles/Magikarp.png">
</p>

> This project is purely to learn GraphQL and to support future front-end projects that query the PokeAPI

## Getting Started

```sh
git clone git@github.com:icedCoughfee/magikarp.git
cd magikarp
npm install
npm run dev
```

## Nodemon

Nodemon is set with the verbose option for development but can be turned off by updating flag in configs/nodemon.json. Official Nodemon [documentation](https://github.com/remy/nodemon) houses additional options and specifications.

```sh
{ verbose: false }
```

## Postman

Start the GraphQL server and Import _Magikarp.postman_collection.json_ into [Postman](https://www.getpostman.com/) to get started with Magikarp's GraphQL calls. The combined schema created by [schemaglue](https://www.npmjs.com/package/schemaglue) is built by running the GraphQL server with either of the following commands and is created under exports as _magikarp-schema.graphql_, which can be imported into Postman for auto-completion.

```sh
npm run dev
```

```sh
npm start
```
