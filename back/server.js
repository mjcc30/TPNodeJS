const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;
const hostname = "127.0.0.1";
const db = "immo";
const DBPORT = "27017"

mongoose.connect(`mongodb://${hostname}:${DBPORT}/${db}`, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

const { createAnnonceRoutes } = require("./routes");

app.use(cors());
app.use(bodyParser.json());

createAnnonceRoutes(app);

app.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});
