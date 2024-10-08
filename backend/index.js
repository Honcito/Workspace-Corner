const express = require("express");

const app = express();

// Devolviendo el permiso CORS desde la API
// Install cors package
const cors = require("cors");


// Add permission from origin domain to ionic server
var corsOptions = {
    origin: "http://localhost:8100",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

/*
app.use(cors({
    origin: 'http://localhost:8100',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));
*/
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Implementation Sequelize
const db = require("./models");
//const { DELETE } = require("sequelize/types/query-types");

//normal use. Doesn't delete the database data
//db.sequelize.sync();

// In development, you may need to drop existing tables and re-sync database
/*
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.")
});
*/

db.sequelize.sync({ alter: true}).then(() => {
    console.log("Sync and alter table if necessary.");
});

// A simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Workplace Corner"})
});

//Importing routes
require("./routes/employee.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}.`);
});

