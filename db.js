const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'InIVlruaWOOMFupnYbKleaoNDiPggeTq',
    host: 'junction.proxy.rlwy.net',
    port: '32694',
    database: 'railway'
})

module.exports = pool