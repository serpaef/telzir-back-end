"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhonePlan_1 = __importDefault(require("../database/models/PhonePlan"));
class PhonePlansService {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // I thought it would be better to let the exception be thrown, and handle it in the controller
            const plans = yield PhonePlan_1.default.findAll();
            return plans;
        });
    }
}
exports.default = PhonePlansService;