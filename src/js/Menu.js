import React, { useState } from 'react';

function Menu(props) {

	const [sub, setSub] = useState("tools")

	function handleLink(linkType) {
		setSub(linkType)
	}

	const tools = 
		<div className="tools">
			<img className="front" src={require(`../assets/${"front".concat(props.object.link)}.svg`)} />
				<h5 className="front-copy"> React, ES6 </h5>
      <img className="back" src={require(`../assets/${"back".concat(props.object.link)}.svg`)} />
      	<h5 className="back-copy"> Scala, Python, Go </h5>
		</div>

	const other =
		<nav className="other">
			<li className="other-links"><a href="https://github.com/ubiv64">GitHub</a></li>
			<li className="other-links"><a href="https://www.are.na/vibu-a">Arena</a></li>
			<img className="avail" src={require(`../assets/avail.svg`)} />
			<h5 className="avail-copy"> Available </h5>  
		</nav>


	const menu =
    <nav className="menu">
      <li onClick={() => handleLink("tools")}>tools </li>
      <li onClick={() => handleLink("other")}> other </li>
      	{(sub === "tools") ? tools : other}
      <p> </p>
    </nav>

  return(
  	<div>
  		{menu}
  	</div>
  )  
}

export default Menu