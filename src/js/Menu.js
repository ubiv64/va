import React, { useState } from 'react';

function Menu(props) {

	const [sub, setSub] = useState("tools")

	function handleLink(linkType) {
		setSub(linkType)
	}

	const tools = 
		<div>
			<img className="front" src={require(`../assets/${"front".concat(props.object.link)}.svg`)} />
				<p className="front-copy"> React, ES6 </p>
      <img className="back" src={require(`../assets/${"back".concat(props.object.link)}.svg`)} />
      	<p className="back-copy"> Scala, Python, Go </p>
		</div>

	const other =
		<nav className="other">
			<li><a href="https://github.com/ubiv64">GitHub</a></li>
			<li><a href="https://www.are.na/vibu-a">Arena</a></li>
			<img className="avail" src={require(`../assets/avail.svg`)} />
			<p className="avail-copy"> Available </p>  
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