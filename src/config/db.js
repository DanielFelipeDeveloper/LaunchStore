const { Pool } = require("pg")

module.exports = new Pool({
  user: "postgres",
  password: "2801",
  host: "localhost",
  port: 5432,
  database: "launchstore"
})