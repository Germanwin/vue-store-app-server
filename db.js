const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'your_password',
    host: 'localhost',
    port: '5432',
    database: 'estore_db'
})

module.exports = pool