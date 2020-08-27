import React, { useState } from 'react'

import Light from './Light.js';

function Theme() {

	const [bulb, setBulb] = useState(false)

	if (bulb) {
		document.body.style.backgroundColor = "#000000"
		document.body.style.color = "#FFFFFF"
	} else {
		document.body.style.backgroundColor = "#F9E4CF"
		document.body.style.color = "#000000"
	}

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

	function handleLink(linkType) {
		switch (linkType) {
			case "tools" :
				console.log("tools")
				break
			case "other" :
				console.log("other")
				break
		}
	}



	const menu =
		<nav>
	    <ul>
	      <li id="tools" onClick={() => handleLink("tools")}>tools</li>
	      <li id="other" onClick={() => handleLink("other")}>other</li>
	    </ul>
	  </nav>

	return(
		<div>
			<Light object={object} />
			{menu}
		</div>
	)
}

export default Theme