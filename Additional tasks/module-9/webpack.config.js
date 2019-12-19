const path = require("path");

//console.log("DIRNAME : ", __dirname);

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
};
