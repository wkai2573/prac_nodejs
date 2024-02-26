// db.js

import pg from 'pg'

// 設置資料庫連接設定
export const client = new pg.Client({
	user: 'postgres',
	host: 'localhost',
	database: 'postgres',
	password: 'kai',
	port: 5432, // PostgreSQL 的默認端口號
});

// 連接到資料庫
client.connect()
	.then(() => console.log('Connected to the database'))
	.catch(err => console.error('Connection error', err.stack));