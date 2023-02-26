const mariadb = require("mariadb");

const config = {
    host: "localhost",
    user: "root",
    password: "pachafarm123",
    database: "PachaData",
    connectionLimit: 5,
    acquireTime: 300
};

class DBConnector {
    dbconnector = mariadb.createPool(config);
    
    async query(sQuery) {
        var conn = await this.dbconnector.getConnection();
        var ret = null;
        await conn.query(sQuery)
            .then(data => {
                ret = data;
                conn.end();
            })
            .catch(error => {
                console.log(error);
                conn.end();
            });
        return ret;
    };
    async queryWithParams(sQuery, params) {
        var conn = await this.dbconnector.getConnection();
        var ret = null;
        await conn.query(sQuery, params)
            .then(data => {
                ret = data;
                conn.end();
            })
            .catch(error => {
                console.log(error);
                conn.end();
            });
        return ret;
    };
};

module.exports = new DBConnector();