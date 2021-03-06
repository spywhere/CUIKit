"use strict";

let moduleExports = {};

[
    "./CoreGraphics/CGGeometry",
    "./Foundation/Foundation",
    "./UIKit/UIKit",
].forEach(moduleName => {
    let module = require(moduleName);
    Object.assign(moduleExports, module);
});

module.exports = moduleExports;
