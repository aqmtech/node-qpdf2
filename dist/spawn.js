"use strict";
// Ignore errors about unsafe-arguments, this is because data is unknown
/* eslint-disable @typescript-eslint/no-unsafe-argument */
Object.defineProperty(exports, "__esModule", { value: true });
const node_child_process_1 = require("node:child_process");
// eslint-disable-next-line unicorn/no-anonymous-default-export
exports.default = (callArguments) => new Promise((resolve, reject) => {
    const process = (0, node_child_process_1.spawn)("qpdf", callArguments);
    const stdout = [];
    const stderr = [];
    process.stdout.on("data", (data) => {
        stdout.push(data);
    });
    process.stderr.on("data", (data) => {
        /* c8 ignore next */
        stderr.push(data);
    });
    process.on("error", (error) => {
        /* c8 ignore next */
        reject(error);
    });
    process.on("close", (code) => {
        if (code === 0) {
            // resolve(Buffer.from(stdout.join("")));
            resolve(Buffer.concat(stdout));
        }
        else {
            // There is a problem from qpdf
            reject(new Error(Buffer.from(stderr.join("")).toLocaleString()));
        }
    });
});
//# sourceMappingURL=spawn.js.map