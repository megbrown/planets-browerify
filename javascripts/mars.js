"use strict";

const mars = Object.create(null);

let marsInfo =
`<div class="planet">
	<h1>Mars</h1>
	<p>Discovered in 1659</p>
	<p>Mass: 6.39 × 10^23 kg</p>
	<p>Size: 2,106 mi</p>
	<p>141.6 million mi from the Sun</p>
	<p>The atmosphere of Mars is about 100 times thinner than Earth's, and it is 95 percent carbon dioxide.</p>
	<p>The two moons of Mars are Phobos and Deimos. Both moons were discovered in 1877 by Asaph Hall and are named after the characters Phobos (panic/fear) and Deimos (terror/dread) who, in Greek mythology, accompanied their father Ares, god of war, into battle. Ares was known as Mars to the Romans.</p>
	<p>Mars Pathfinder was a U.S. spacecraft that landed a base station with a roving probe on Mars on July 4, 1997. It consisted of a lander and a small 10.6 kilograms (23 lb) wheeled robotic rover named Sojourner, which was the first rover to operate on the surface of Mars.</p>
	</div>`;

	mars.outputTo = function(domElement) {
		domElement.append(marsInfo);
	};

	module.exports = mars;