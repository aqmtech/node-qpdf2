"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
const spawn_js_1 = __importDefault(require("./spawn.js"));
const utils_js_1 = require("./utils.js");
/**
 * Gets the encryption info for a PDF
 * @param payload The settings for info
 * @returns The output of QPDF
 */
const info = async (payload) => {
    if (!payload.input)
        throw new Error("Please specify input file");
    if (!(0, utils_js_1.fileExists)(payload.input))
        throw new Error("Input file doesn't exist");
    const callArguments = ["--show-encryption"];
    // Password
    if (payload.password) {
        callArguments.push(`--password=${payload.password}`);
    }
    // Input file path
    callArguments.push(payload.input);
    const result = await (0, spawn_js_1.default)(callArguments);
    return result.toLocaleString().trim();
};
exports.info = info;
