"use strict";

const neptune = Object.create(null);

let neptuneInfo =
`<div class="planet">
	<h1>Neptune</h1>
	<p>Discovered in 1846</p>
	<p>Mass: 1.024 × 10^26 kg</p>
	<p>Size: 15,299 mi</p>
	<p>2.795 billion mi from the Sun</p>
	<p>The atmosphere of Neptune is similar to all the large planets in the Solar System; it mostly consists of hydrogen and helium, with trace amounts of methane, water, ammonia and other ices. But unlike the other gas planets in the Solar System, Neptune's atmosphere has a larger proportion of the ices.</p>
	<p>Neptune has 14 known moons, which are named for minor water deities in Greek mythology.</p>
	<p>NASA's Voyager 2 satellite was the first and as yet only spacecraft to visit Neptune on Aug. 25, 1989. The satellite discovered Neptune's rings and six of the planet's moons — Despina, Galatea, Larissa, Naiad, Proteus and Thalassa.</p>
	</div>`;

	neptune.outputTo = function(domElement) {
		domElement.append(neptuneInfo);
	};

	module.exports = neptune;