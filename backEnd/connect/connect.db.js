const mysql = require('mysql')

exports.conDB = () => {
    
    return mysql.createConnection({
        host: process.env.APP_URL_APIS_DATABASE,
        user: process.env.APP_USER_DATABASE,
        password: process.env.APP_PAS_DATABASE,
        database: process.env.APP_NAME_DATABASE
      })
} 