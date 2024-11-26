"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _nodeChild_process = require("node:child_process");
// Ignore errors about unsafe-arguments, this is because data is unknown
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// eslint-disable-next-line unicorn/no-anonymous-default-export
var _default = exports["default"] = function _default(callArguments) {
  return new Promise(function (resolve, reject) {
    var process = (0, _nodeChild_process.spawn)("qpdf", callArguments);
    var stdout = [];
    var stderr = [];
    process.stdout.on("data", function (data) {
      stdout.push(data);
    });
    process.stderr.on("data", function (data) {
      /* c8 ignore next */
      stderr.push(data);
    });
    process.on("error", function (error) {
      /* c8 ignore next */
      reject(error);
    });
    process.on("close", function (code) {
      if (code === 0) {
        // resolve(Buffer.from(stdout.join("")));
        resolve(Buffer.concat(stdout));
      } else {
        // There is a problem from qpdf
        reject(new Error(Buffer.from(stderr.join("")).toLocaleString()));
      }
    });
  });
};