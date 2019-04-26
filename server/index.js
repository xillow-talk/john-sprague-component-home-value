const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const controller = require("./controller.js");
const db = require("../db");

const app = express();
const port = 8081;
const serve = express.static("./public/dist");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", serve);
app.use(bodyParser.json());

app.get("/:propertyId", (req, res) => {
  res.sendfile(path.resolve(__dirname + "/../public/dist/index.html"));
});

app.get("/api/properties/", controller.get);

app.get("/api/properties/:propertyId", controller.fetchPropertyData);

app.listen(port, () => {
  console.log(`Hido ho, captn! Listening on port: ${port}`);
});
