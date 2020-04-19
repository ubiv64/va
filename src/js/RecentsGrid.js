import React, { Component } from 'react';

import '../styles/RecentsGrid.css';

import PopUp from './PopUp.js';

class RecentsGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isClicked: false,
			currentIndex: 0
		}
	}

	//pass in handleClick()
	//might need a state variable to keep track of array
		//may need to refactor into componentDidMount()
		//may not need it since random is passed in as props
	createGrid(random) {
		let images = random.map(int => {
			return <img id={random.indexOf(int)} className="perImage" src={`https://vibu-a.s3.us-east-2.amazonaws.com/${int}.jpg`} onClick={(e) => this.handlePopUpClick(e)} />;
		});

		return images;
	}

	invokePopUp(grid){
		document.getElementById("vibu").hidden = true;

		let popUpGrid = grid.map(image => {
			return <img id={grid.indexOf(image)} className="forPopUpImg" src={image.props.src} />
		})

		let gridReq = {
			images: popUpGrid,
			currentIndex: parseInt(this.state.currentIndex, 10)
		}

		return <PopUp gridReq={gridReq} />
	}


	// resetGrid()

	handlePopUpClick = (event) => {
		this.setState({
			isClicked: true,
			currentIndex: event.target.id
		})
	}

	// handleClick = () => {
	// 	this.setState({isClicked: false})
	// }

	render () {
		const grid = this.createGrid(this.props.random)

		let popUp = (this.state.isClicked) ? this.invokePopUp(grid) : null

		return (
			<div>
				<div id="vibu" className="container">
					{grid}
				</div>
				<div>
					{popUp}
				</div>
			</div>
		);
	}

}

export default RecentsGrid