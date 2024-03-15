// db.js

import pg from 'pg'

// 設置資料庫連接設定
const client = new pg.Client({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

// 連接到資料庫
client.connect()
	.then(() => console.log('Connected to the database'))
	.catch(err => console.error('Connection error', err.stack));

export {client};
