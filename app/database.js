require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.PG_URL,
  
});

client.connect()


module.exports = client;