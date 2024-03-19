import {formatError} from './gql/extended_error/extended_error.mjs';


import "dotenv/config.js"; // 引用.env
const {env: {PORT: port}} = process;

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


// 定义中间件函数以验证登录状态
// const authMiddleware = async (requestContext) => {
// 	console.log('Request started!');

// 	return {
// 		async parsingDidStart(requestContext) {
// 			console.log('Parsing started!');
// 		},

// 		async validationDidStart(requestContext) {
// 			console.log('Validation started!');
// 		},
// 	};
// };

const server = new ApolloServer({
	typeDefs,
	resolvers,
	formatError,
	plugins: [
		ApolloServerPluginDrainHttpServer({httpServer}),
		// {requestDidStart: authMiddleware}, 
	],
});

// 啟動ApolloServer
await server.start();


// 設定中介。 參考 https://hackmd.io/@Heidi-Liu/note-be201-express-middleware
app.use(
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
	// expressMiddleware 接受相同的參數：Apollo Server 執行個體和可選的設定選項
	expressMiddleware(server, {
		context: async ({req}) => ({token: req.headers.token}),
	}),
);

// 啟動 express with apollo 伺服器
await new Promise((resolve) => httpServer.listen({port}, resolve));
console.log(`🚀 Server ready at http://localhost:${port}/gql`);