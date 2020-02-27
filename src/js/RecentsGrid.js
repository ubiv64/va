import React, { Component } from 'react';

class RecentsGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render () {
		return(
			<div>
				<img className="imageList" src="https://vibu-a.s3.us-east-2.amazonaws.com/1.jpg" />
				<img className="imageList" src="https://vibu-a.s3.us-east-2.amazonaws.com/2.jpg" />
				<img className="imageList" src="https://vibu-a.s3.us-east-2.amazonaws.com/110.jpg" />
			</div>
		);
	}
}

export default RecentsGrid