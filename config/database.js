const { Pool } = require('pg');
require('dotenv').config();

// Create a new pool instance for Postgres
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Export the pool for use in other parts of the app
module.exports = pool;
