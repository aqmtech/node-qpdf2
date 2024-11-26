"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hyphenate = exports.fileExists = void 0;
var _nodeFs = require("node:fs");
/**
 * hyphenate will take any value that is dromedary case (camelCase with a initial lowercase letter)
 * and convert it to kebab case (kebab-case). For example `camelCase` becomes camel-case
 * @param variable the value to be "kebab'd"
 * @returns the value with in kebab case
 */
var hyphenate = exports.hyphenate = function hyphenate(variable) {
  return variable.replaceAll(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

/**
 * Determines if the file exists
 * @param file the path of the file to be tested.
 */
// eslint-disable-next-line security/detect-non-literal-fs-filename
var fileExists = exports.fileExists = function fileExists(file) {
  return !!(0, _nodeFs.existsSync)(file);
};