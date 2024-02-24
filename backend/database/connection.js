const express = require('express');
const dotenv = require("dotenv");
const pg = require('pg');
const path = require('path');
const app = express();
const port = 3000; // Or any other desired port
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Configure database connection details. Use environment variables for security:
const pool = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Create a middleware function to handle database errors:
const errorMiddleware = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Database error occurred' });
};

// Define a route to test the connection:
app.get('/test-connection', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT 1 + 1 AS sum');
    await client.release();
    res.json({ message: 'Connection successful', sum: result.rows[0].sum });
  } catch (err) {
    console.log(err)
    // next(err); // Pass error to middleware
  }
});


// Use the error middleware after all other routes:
// app.use(errorMiddleware);

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// pool.on("error", (err, client) => {
//   console.log(err);
//   // logger.error("Unexpected error on idle client", err);
//   process.exit(-1);
// });

module.exports = {
  pool: pool,
};