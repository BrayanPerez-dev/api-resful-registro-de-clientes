"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes();
        this.databaseSync();
    }
    databaseSync() {
        var _a;
        const db = new database_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
    routes() {
        var _a;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.route("/").get((req, res) => {
            res.send("bienvenido");
        });
    }
}
const port = 8000;
const app = new App().app;
app === null || app === void 0 ? void 0 : app.listen(port, () => {
    console.log("servidor iniciado exitosamente");
});
