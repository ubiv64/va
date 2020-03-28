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
				console.log(canvas)
			},
		  { 
		  	orientation: 6,

		  	corsOrigin: 'anonymous'
		  }
		);

		console.log(image)

		return (
			<div dangerouslySetInnerHTML={{__html: image}} />
		);
	}
}

export default RecentsGrid