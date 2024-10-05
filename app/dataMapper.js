const client = require("./database");

const dataMapper = {
  
  getAllCafes: async () => {

  const sql = `
  SELECT * FROM coffe
  `;

  const result = await client.query(sql);
  
  return result.rows
},

getOneCafe : async (reference) => {

  const referenceInt = parseInt(reference, 10);

const sql = `
SELECT * FROM coffe
WHERE reference = $1
`;

const result = await client.query(sql, [referenceInt]);

return result.rows[0]

},

getLatestProduct: async () => {
  const sql = `
  SELECT * FROM coffe
  ORDER BY created_at DESC
  LIMIT 3
  `;
  
  const result = await client.query(sql)

  return result.rows;
},

getCafesByCategory: async (categoryName) => {
  const sql = `
    SELECT coffe.*
    FROM coffe
    INNER JOIN category ON coffe.category_id = category.id
    WHERE category.name ILIKE $1;
  `;

  // Passer les paramètres dans un tableau comme deuxième argument
  const result = await client.query(sql, [`%${categoryName}%`]);
  return result.rows;
},

getAllCategories: async () => {
  const sql = 'SELECT * FROM category';
  const result = await client.query(sql);
  return result.rows;
},

};

module.exports = dataMapper;