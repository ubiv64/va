import React, { useState } from 'react'

import Light from './Light.js';
import Menu from './Menu.js';

function Theme() {

	const [bulb, setBulb] = useState(false)

	if (bulb) {
		document.body.style.backgroundColor = "#000000"
		document.body.style.color = "#FFFFFF" //maybe C6C3C3?
	} else {
		document.body.style.backgroundColor = "#F9E4CF"
		document.body.style.color = "#000000"
	}

	function lightSwitch() {
		document.body.removeChild(document.getElementsByTagName('canvas')[0])
		setBulb(!bulb)
	}

	var lightObject = {
		stroke: (!bulb) ? "black" : "white", 
		link: (!bulb) ? "" : "Lit",
		rectangle: (window.innerWidth < 900) ?  { x: 500, y: 300, pointAX: 515 } : { x: 400, y: 300, pointAX: 430 },
		canvasSize: (window.innerWidth < 900) ? 500 : 800,
		lightSwitch: lightSwitch
	}

	var menuObject = {
		link: (!bulb) ? "" : "Lit"
	}

	return(
		<div>
			<Light object={lightObject} />
			<Menu object={menuObject}/>
			<a className="email" href="mailto:vibu.anbarasan.64@gmail.com">Email</a>
		</div>
	)
}

export default Theme