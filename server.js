const express = require("express");
const app = express();
const compression = require("compression");
const port = process.env.PORT || 5000;
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");

app.use(compression());
app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
dotenv.config();

fs.readdirSync("./server/routes").forEach((route) => {
  var routeName = route.split(".")[0];
  require(`./server/routes/${routeName}`)(app);
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
