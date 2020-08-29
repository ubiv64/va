import React, { useState } from 'react'

import Light from './Light.js';

import '../styles/Main.css';

function Theme() {

	const [bulb, setBulb] = useState(false)

	const underline = {
		borderBottom: (!bulb) ? '.1em solid black' : '.1em solid white',
		lineHeight: '2em'
	}

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

	function updateClass(toAdd, toRemove) {
		if (!bulb) {
			if (toRemove.hasAttribute("style")) {
				toRemove.removeAttribute("style")
				toAdd.setAttribute("style", "underline")
			}
		} else {
			if (toRemove.hasAttribute("style")) {
				toRemove.removeAttribute("style")
				toAdd.setAttribute("style", underline)
			}
		}
	}

	function handleLink(linkType) {
		let element = document.getElementById(linkType)
		let toAdd, toRemove
		switch (linkType) {
			case "tools" :
				[toAdd, toRemove] = [element, document.getElementById("other")]
				updateClass(toAdd, toRemove)
				break
			case "other" :
				[toAdd, toRemove] = [element, document.getElementById("tools")]
				updateClass(toAdd, toRemove)
				break
		}
	}

	const menu =
    <nav>
      <li id="tools" style={underline} onClick={() => handleLink("tools")}>tools </li>
      <li id="other" onClick={() => handleLink("other")}> other </li>
    </nav>

	return(
		<div>
			<Light object={object} />
			{menu}
		</div>
	)
}

export default Theme