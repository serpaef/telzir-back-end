"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PhonePlansController_1 = __importDefault(require("./controllers/PhonePlansController"));
const RatesController_1 = __importDefault(require("./controllers/RatesController"));
const routes = (0, express_1.Router)();
routes.get('/ping', (_req, res) => {
    res.status(200).send({ message: 'pong' });
});
routes.get('/plans', PhonePlansController_1.default.getAll);
routes.get('/rates', RatesController_1.default.getAll);
exports.default = routes;
