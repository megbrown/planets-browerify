"use strict";

let $ = require("jquery");

let domElement = $("#domElement");

let planetsInfo = {
	saturn: require("./saturn")
};

planetsInfo.saturn.outputTo(domElement);