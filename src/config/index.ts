import fs = require("fs");
import path = require("path");

const ENV = process.env.NODE_ENV || "development";
const FILE_PATH = path.resolve(__dirname, (ENV + ".config.js"));

if (!fs.existsSync(FILE_PATH)) {
    throw new Error("Config file does not exists");
}

interface ConfigObject {
    database: object;
    jwt?: object;
}

export = require(FILE_PATH) as ConfigObject;
