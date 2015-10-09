var fs = require("fs");

function getData() {
    return ["#dddddd", "#900455", "#0055ff"];
}

function getConfig() {
    return JSON.parse(fs.readFileSync(process.cwd() + "/config.json").toString());
}

module.exports = function() {
    var palette = getConfig().palette;

    if (!Array.isArray(palette)) {
        throw new Error("is not an array");
    }
    return palette;
}