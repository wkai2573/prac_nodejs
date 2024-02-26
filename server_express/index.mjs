import express from "express";
const app = express();
const port = 3000;

import {client} from './postgres.mjs'; // 導入 PostgreSQL 客戶

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get('/json', (req, res) => {
	res.send({a: 'b', c: 'd'});
});


// 定義一個路由處理程序，當收到 GET 請求時查詢 PostgreSQL 資料庫中的 users 表格
app.get('/users', (req, res) => {
	// 設置要使用的 Schema
	// const schemaName = 'prac'; // 替換為你想要使用的 Schema 名稱
	// client.query(`SET search_path TO ${schemaName}`);

	client.query('SELECT * FROM prac.users', (err, result) => {
		if (err) {
			console.error('Query error', err.stack);
			res.status(500).send('Error retrieving users');
		} else {
			res.json(result.rows); // 返回查詢結果作為 JSON 格式
		}
	});
});

// 開啟server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
	console.log(`Server is running on http://localhost:${port}`);
});