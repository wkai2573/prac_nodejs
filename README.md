# 待研究方向

1. ~~gql加入scalar_UUID~~
2. ~~gql中介~~
3. ~~gql的resolver fn， 使用db查詢~~
4. ~~實作中介驗證步驟~~
   1. ~~登入: Log > Server~~
      1. [login.mjs](server_apollo/gql/resolver/Mutation/login.mjs)
      2. [token.mjs](server_apollo/lib/token.mjs)
   2. ~~取資料: Log > Auth > Server (模擬未登入回傳錯誤)~~
5. 做前端server 可呼叫 後端:5001的資料
6. gql 後端上傳
7. gql 前端上傳



# 測試方式

1. 在js檔中按下F5測試 (結束即關閉server), F5將根據.vscode/launch.json執行
2. npm start (關閉server需要另外指令)
3. npm run /script/ (關閉server需要另外指令)





# Links

* [GraphQL 入門：初次實作 Schema 與 Resolver](https://ithelp.ithome.com.tw/articles/10203333)
  
* [API Reference: startStandaloneServer](https://www.apollographql.com/docs/apollo-server/api/standalone/)
* [使用express中介](https://www.apollographql.com/docs/apollo-server/api/standalone/#swapping-to-expressmiddleware)
* [配置CORS(跨來源資源共享)](https://www.apollographql.com/docs/apollo-server/security/cors/)

* [官方範例-登入驗證](https://www.howtographql.com/graphql-js/6-authentication/)


# package dependencies 註解
* "express": "4.18.2"        - Express Server
* "cors": "2.8.5"            - Express 中介模組:跨域
* "@apollo/server": "4.10.0" - Apollo Server(GraphQL)
* "graphql": "16.8.1"        - GraphQL
* "graphql-http": "1.22.0"   - GraphQL
* "dotenv": "16.4.5"         - 載入env
* "jsonwebtoken": "9.0.2"    - jwt token 驗證
* "bcryptjs": "2.4.3"        - 密碼加密
* "pg": "8.11.3"             - postgreSQL 資料庫