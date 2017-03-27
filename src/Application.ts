import express = require("express");
import morgan = require("morgan");
import load = require("express-load");
import parser = require("body-parser");

var app = express();
app.use(morgan("dev"));
app.use(parser.json());

load("routes", { cwd: __dirname })
    .into(app);

export = app;
