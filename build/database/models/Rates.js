"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const sequelize_1 = require("sequelize");
class Rates extends sequelize_1.Model {
}
Rates.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    origin: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    destination: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    pricePerMinute: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    tableName: 'rates',
    timestamps: false,
    underscored: true,
});
exports.default = Rates;
