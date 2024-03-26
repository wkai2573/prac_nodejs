import {formatError} from './lib/extended_error/extended_error.mjs';


import "dotenv/config.js"; // 引用.env
const env = process.env;
const port = env.port;

// 連線DB
import {DbAction} from './db/db_action.mjs';
const db = new DbAction();


// 導入 GraphQL schema & resolver
import {typeDefs} from './gql/schema.mjs';
import {resolvers} from './gql/resolver.mjs';


// expressServer 中介ApolloServer
// https://www.apollographql.com/docs/apollo-server/api/standalone/#swapping-to-expressmiddleware
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

// 將expressServer 轉成 nodejs原生的httpServer
// 然後導入ApolloServer，告訴 ApolloServer「耗盡(做完)」這個 httpServer，才能關閉伺服器。
const app = express();
const httpServer = http.createServer(app);


// ApolloServer
const server = new ApolloServer({
	typeDefs,
	resolvers,
	formatError,
	plugins: [
		ApolloServerPluginDrainHttpServer({httpServer}),
	],
});
await server.start();


// 設定中介, 參考 https://hackmd.io/@Heidi-Liu/note-be201-express-middleware
app.use(
	// 指定路由
	'/gql',

	// 跨域設定: 允許指定domain可存取此server資料, 無參數則是全允許
	cors({
		origin: function (origin, callback) {
			if (origin === undefined || origin.startsWith('http://localhost:5001')) {
				callback(null, true);
			} else {
				callback(new Error(`Not allowed by CORS: ${origin}`));
			}
		}
	}),

	// 請求大小限制
	bodyParser.json({limit: '10mb'}),

	// 使用中介後, startStandaloneServer的context 要改用 expressMiddleware(server, context)
	// context 的return = resolver的第三參數
	expressMiddleware(server, {
		context: async ({req, res}) => {
			return {req, res, db};
		},
	}),
);

// 啟動 express with apollo 伺服器
await new Promise((resolve) => httpServer.listen({port}, resolve));
console.log(`🚀 Server ready at http://localhost:${port}/gql`);