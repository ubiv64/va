import React, { useState } from 'react';

import Light from './Light.js';
import Menu from './Menu.js';

function Theme() {

	const [bulb, setBulb] = useState(false)

	if (bulb) {
		document.body.style.backgroundColor = "#000000"
		document.body.style.color = "#FFFFFF"
	} else {
		document.body.style.backgroundColor = "#FBF2E9"
		document.body.style.color = "#000000"
	}

	function lightSwitch() {
		document.body.removeChild(document.getElementsByTagName('canvas')[0])
		setBulb(!bulb)
	}

	var lightObject = {
		stroke: (!bulb) ? "black" : "white", 
		link: (!bulb) ? "" : "Lit",
		lineWidth: (window.innerWidth < 950) ? 10 : 4,
		rectangle: (window.innerWidth < 950) ?  { x: 570, y: 400, pointAX: 600, pointBY: -86 } : { x: 200, y: 300, pointAX: 230, pointBY: -32 },
		canvasSize: 500,
		mobile: (window.innerWidth < 950) ? true : false,
		lightSwitch: lightSwitch
	}

	var menuObject = {
		link: (!bulb) ? "" : "Lit"
	}

	return(
		<div>
			<Light object={lightObject} />
			<Menu object={menuObject} />
			<a className="email" href="mailto:vibu.anbarasan@gmail.com">Email</a>
		</div>
	)
}

export default Theme