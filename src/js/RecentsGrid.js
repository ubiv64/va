import React, { Component } from 'react';
import * as loadImage from 'blueimp-load-image';

import '../styles/RecentsGrid.css';

class RecentsGrid extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		const image = loadImage(
			'https://vibu-a.s3.us-east-2.amazonaws.com/1.jpg', 
			(canvas) => {
				document.body.appendChild(canvas)
			},
		  { 
		  	orientation: 6,

		  	corsOrigin: 'anonymous'
		  }
		);

		return (
			<img src="https://vibu-a.s3.us-east-2.amazonaws.com/1.jpg" />
		);
	}
}

export default RecentsGrid