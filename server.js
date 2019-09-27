const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

app.use(express.static("public/"));
app.use(helmet());
app.use(compression());

app.listen(process.env.PORT || 3000);