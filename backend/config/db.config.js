

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB:  "workcorner",
    dialect: "mysql",
    pool: {
        max: 30,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};