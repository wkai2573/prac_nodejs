import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';

// 引用.env
import "dotenv/config.js";

// 導入 GraphQL schema & resolver
import typeDefs from './gql/schema.mjs';
import resolvers from './gql/resolver.mjs';

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const {url} = await startStandaloneServer(server, {
	context: async ({req}) => ({token: req.headers.token}),
	listen: {port: process.env.PORT},
});
console.log(`🚀 Server ready at ${url}`);