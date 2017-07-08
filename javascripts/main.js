"use strict";

let $ = require("jquery");

let domElement = $("#domElement");

let planetsInfo = {
	saturn: require("./saturn"),
	mars: require("./mars")
};

planetsInfo.saturn.outputTo(domElement);
planetsInfo.mars.outputTo(domElement);