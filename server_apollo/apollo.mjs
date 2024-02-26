import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';

// 引用.env
import "dotenv/config.js";

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
		me: Me
  }

	type Me {
		id: ID
		name: String!
		tags: [String]
	}
`;

// A map of functions which return data for the schema.
const resolvers = {
	Query: {
		hello: () => 'world',
		me: () => {
			return {
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