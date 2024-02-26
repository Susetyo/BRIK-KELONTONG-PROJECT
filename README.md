## Installation

Configuration Backend

```sh
cd backend
cd config
if config.json not exist create one with format config.json
paste this value:
{
  "development": {
    "username": "postgres", <---- please edit with  your username db
    "password": "root",  <---- please edit with your password db
    "database": "brik_toko_kelontong", <---- please edit with your db name
    "host": "127.0.0.1", <---- please edit with your host 
    "dialect": "postgresql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgresql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgresql"
  }
}
```


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
PG_USER=postgres  <---- please edit with your username db
PG_HOST=localhost <---- please edit with your host db
PG_DATABASE=brik_toko_kelontong <---- please edit with your db name
PG_PASSWORD=root <---- please edit with your password db
PG_PORT=5432 <---- please edit with your port db
NODE_PORT=3000 
```

Create .env file inside frontend folder

```sh
VITE_BASE_URL=http://localhost:3000
```

## User Login
```sh
username=admin
password=admin
```

## SQL DUMP (POSTGRESS)

you can use **backup-sql-postgres.sql** too for import to your local db