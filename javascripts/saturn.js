"use strict";

const saturn = Object.create(null);

let saturnInfo =
`<div class="planet">
	<h1>Saturn</h1>
	<p>Discovered in 1610</p>
	<p>Mass: 5.683 × 10^26 kg</p>
	<p>Size: 36,184 mi</p>
	<p>888.2 million mi from the Sun</p>
	<p>Saturn is made up predominantly of hydrogen, which it captured in the early stages of its formation. Most of the remaining composition is helium. Other elements, such as methane and ammonia, are found in small doses. Nitrogen and oxygen also mix within the atmosphere.</p>
	<p>62 moons orbit the planet</p>
	<p>In 1979, Pioneer 11 became the first spacecraft to fly by and study Saturn up close. Voyager 1 flew by in 1980 and Voyager 2 in 1981. These spacecraft studied many of the moons of Saturn as well. In July 2004, the Cassini spacecraft reached Saturn.</p>
	</div>`;

	saturn.outputTo = function(domElement) {
		domElement.append(saturnInfo);
	};

	module.exports = saturn;