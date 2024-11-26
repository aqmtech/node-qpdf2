"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = void 0;
const spawn_js_1 = __importDefault(require("./spawn.js"));
const utils_js_1 = require("./utils.js");
/**
 * Decrypts a PDF
 * @param payload The settings for decryption
 * @returns The output of QPDF
 */
const decrypt = async (payload) => {
    if (!payload.input)
        throw new Error("Please specify input file");
    if (!(0, utils_js_1.fileExists)(payload.input))
        throw new Error("Input file doesn't exist");
    const callArguments = ["--decrypt"];
    // Password
    if (payload.password) {
        callArguments.push(`--password=${payload.password}`);
    }
    // Input file path
    callArguments.push(payload.input);
    // Print PDF on stdout
    if (payload.output) {
        callArguments.push(payload.output);
    }
    else {
        callArguments.push("-");
    }
    return (0, spawn_js_1.default)(callArguments);
};
exports.decrypt = decrypt;
