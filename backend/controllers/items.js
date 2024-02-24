const { pool } = require("../database/connection");

const getItems = async (req, res) => {
  const client = await pool.connect();
  const queryString = { ...req.query }
  const search = queryString.keyword ? `where name LIKE '%${queryString.keyword}%'` : '';
  // ${search} LIMIT ${queryString.limit} OFFSET ${queryString.offset}
  const queryText = `SELECT sku,name, description, weight, width, length, height, image, harga, category_id, category.category_name FROM item INNER JOIN category ON item.category_id = category.id`;
  try {
    await client.query("BEGIN");
    const result = await client.query(queryText)

    res.status(200).json({
      data: result?.rows ? result?.rows : [] 
    });
    await client.query("COMMIT");
  } catch (err) {
    // logger.error("Unexpected error: ", err);
    console.log(err)
    await client.query("ROLLBACK");
    res.status(500).json([]);
  } finally {
    // logger.info("Releasing database client.");
    console.log("Releasing database client.");
    client.release();
  }
  return res;
};

const createItems = async (req, res) => {
  const client = await pool.connect();
  const {id,sku,name, description, weight, width, length, height, image, harga, category_id} = req.body;
  console.log(req)
  try {
    await client.query("BEGIN");
    const text = 'INSERT INTO item(id,sku,name,description,weight,width,length,height,image,harga,category_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)'
    const values = [id,sku,name, description, weight, width, length, height, image, harga, category_id]
    const result = await client.query(text, values);
    res.status(200).json(result.rows[0]);
    await client.query("COMMIT");
  } catch (err) {
    // logger.error("Unexpected error: ", err);
    console.log(err)
    await client.query("ROLLBACK");
    res.status(500).json([]);
  } finally {
    // logger.info("Releasing database client.");
    console.log("Releasing database client.");
    client.release();
  }
  return res;
};





module.exports =  { getItems, createItems }