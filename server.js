const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const apiRoutes = require("./app/routing/apiRoutes.js");
const htmlRoutes = require("./app/routing/htmlRoutes.js");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/app/public')));

app.use("/", htmlRoutes);
app.use("/api/", apiRoutes);


app.listen(port, function () {
    console.log("App listening on PORT " + port);
});