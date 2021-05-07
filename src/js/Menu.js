import React, { useState } from 'react'

function Menu(props) {

	const [sub, setSub] = useState("tools")

	const tools = 
		<div>
			<img className="front" src={require(`../assets/${"front".concat(props.object.link)}.svg`)} />
				<p className="front-copy"> React, ES6 </p>
      <img className="back" src={require(`../assets/${"back".concat(props.object.link)}.svg`)} />
      	<p className="back-copy"> Python, Scala, Go </p>
			<img className="design" src={require(`../assets/${"des".concat(props.object.link)}.svg`)} />
				<p className="design-copy"> Sketch, (some)CAD </p>
		</div>

	const other =
		<nav className="other">
			<li><a href="https://github.com/ubiv64">GitHub</a></li>
			<li><a href="https://www.are.na/vibu-a">Are.na</a></li>
		</nav>


	const menu =
    <nav className="menu">
      <li className={(sub === "tools") ? "underline" : null} onClick={() => setSub("tools")}> tools </li>
      <li className={(sub === "other") ? "underline" : null} onClick={() => setSub("other")}> other </li>
      	{(sub === "tools") ? tools : other}
    </nav>

  return(
  	<div>
  		{menu}
  	</div>
  )  
}

export default Menu