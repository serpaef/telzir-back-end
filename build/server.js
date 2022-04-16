"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
require("dotenv/config");
const PORT = process.env.PORT || 3001;
const app = new App_1.default();
app.start(PORT);
