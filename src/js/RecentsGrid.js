import React, { Component } from 'react';

import '../styles/RecentsGrid.css';

import PopUp from './PopUp.js';

class RecentsGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {isClicked: false}
	}

	//pass in handleClick()
	//might need a state variable to keep track of array
		//may need to refactor into componentDidMount()
		//may not need it since random is passed in as props
	createGrid(random) {
		let images = random.map(int => {
			 return <img src={`https://vibu-a.s3.us-east-2.amazonaws.com/${int}.jpg`} onClick={this.handlePopUpClick} />;
		});

		return images;
	}

	invokePopUp(grid){
		document.getElementById("vibu").style.opacity=.1

		return <PopUp images={grid} />
	}

	handlePopUpClick = () => {
		this.setState({isClicked: true})
	}

	handleClick = () => {
		this.setState({isClicked: false})
	}

	render () {
		const grid = this.createGrid(this.props.random)

		let popUp = (this.state.isClicked) ? this.invokePopUp(grid) : null

		console.log(this.state.isClicked)

		return (
			<div>
				<div className="outside">
					{popUp}
				</div>
				<div id="vibu" className="container">
					{grid}
				</div>
			</div>
		);
	}

}

export default RecentsGrid