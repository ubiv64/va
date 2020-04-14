import React, { Component } from 'react';

import '../styles/RecentsGrid.css';

class RecentsGrid extends Component {
	constructor(props) {
		super(props);
	}

	//pass in handleClick()
	//might need a state variable to keep track of array
		//may need to refactor into componentDidMount()
	createGrid() {
		let random = new Array(12).fill(null).map(() =>
				Math.floor(Math.random() * Math.floor(138))
		)

		let images = random.map(int => {
			 return <img src={`https://vibu-a.s3.us-east-2.amazonaws.com/${int}.jpg`} />;
		});

		return images
	}

	// handClick = () => {
		//pop-up modal with img.src array as props
	// }

	render () {
		const imageGrid = this.createGrid()

		return (
			<div className="container">
				{imageGrid} 
			</div>
		);
	}

}

export default RecentsGrid