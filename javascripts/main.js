"use strict";

let $ = require("jquery");

let domElement = $("#domElement");

let planetsInfo = {
	saturn: require("./saturn"),
	mars: require("./mars"),
	neptune: require("./neptune")
};

planetsInfo.saturn.outputTo(domElement);
planetsInfo.mars.outputTo(domElement);
planetsInfo.neptune.outputTo(domElement);