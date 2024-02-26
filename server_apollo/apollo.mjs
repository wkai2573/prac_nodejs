import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';

// 引用.env
import "dotenv/config.js";

// 導入 GraphQL schema
import typeDefs from './schema.mjs';

// A map of functions which return data for the schema.
const resolvers = {
	Query: {
		hello: () => 'world',
		me: () => {
			return {
				id: 'uuid_v4',
				name: 'xdd',
				tags: ['a', 'b'],
			};
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const {url} = await startStandaloneServer(server, {
	context: async ({req}) => ({token: req.headers.token}),
	listen: {port: process.env.PORT},
});
console.log(`🚀 Server ready at ${url}`);