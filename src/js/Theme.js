import React, { useState } from 'react'

import Light from './Light.js';

import '../styles/Main.css';

function Theme() {

	const [bulb, setBulb] = useState(false)

	function lightSwitch() {
		document.body.removeChild(document.getElementsByTagName('canvas')[0])
		setBulb(!bulb)
	}

	var object = {
		stroke: (!bulb) ? "black" : "white", 
		link: (!bulb) ? "bulb" : "bulbLit",
		canvasSize: (window.innerWidth < 900) ? 400 : 800,
		lightSwitch: lightSwitch
	}

	if (bulb) {
		document.body.style.backgroundColor = "#000000"
		document.body.style.color = "#FFFFFF"
	} else {
		document.body.style.backgroundColor = "#F9E4CF"
		document.body.style.color = "#000000"
	}

	return(
		<div>
			<Light object={object} />
		</div>
	)
}

export default Theme