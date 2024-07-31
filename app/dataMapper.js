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

};

module.exports = dataMapper;