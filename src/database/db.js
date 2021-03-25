"use strict";
exports.__esModule = true;
var database_1 = require("@replit/database");
var database = /** @class */ (function () {
    function database() {
        this.dbClient = new database_1.Client();
    }
    database.prototype.getDBitem = function (id) {
        return this.dbClient.get(id);
    };
    database.prototype.setDBitem = function (id, value) {
        try {
            this.dbClient.set(id, value);
            return value;
        }
        catch (error) {
            console.log(error);
            return value;
        }
    };
    return database;
}());
exports["default"] = new database;
