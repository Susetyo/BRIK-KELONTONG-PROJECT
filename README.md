## Installation

Backend folder

```sh
cd backend
npm install
npm install -g sequelize-cli
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
node .\server.js (windows cmd)
```
Fronted

```sh
cd frontend
npm install
npm run dev
```

## .Env

Create .env file inside backend folder

```sh
PG_USER=postgres //adjust it to your local env
PG_HOST=localhost //adjust it to your local env
PG_DATABASE=brik_toko_kelontong //adjust it to your local env
PG_PASSWORD=root //adjust it to your local env
PG_PORT=5432 //adjust it to your local env
NODE_PORT=3000 //adjust it to your local env
```


## User Login
```sh
username=admin
password=admin
```

## SQL DUMP (POSTGRESS)

you can use **backup-sql-postgres.sql** too for import to your local db