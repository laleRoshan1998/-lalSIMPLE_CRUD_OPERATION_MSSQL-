const sql = require('mssql')

//Database Configuration
const  dbconfiguration = {
    server: 'mssql.esmsys.in', 
    user: 'interndb',
    password: 'Intern@20#22',
    database: 'interndb',
    port: 14251,
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    }
}
module.exports = dbconfiguration;

