"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const sequelize_1 = require("sequelize");
class PhonePlans extends sequelize_1.Model {
}
PhonePlans.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    plan: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    minutes: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    tableName: 'phone_plans',
    timestamps: false,
});
exports.default = PhonePlans;
