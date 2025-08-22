const fs = require("fs");

const middleware = (req, res, next) => {
    const log = `${Date.now} : Log created by URL ${req.url}\n`;
    fs.appendFile(__dirname + "/../log.txt", log, (err) => { });
    next();
}

module.exports = middleware;
