import React, { Component } from 'react';
import '../styles/RecentsGrid.css'

class RecentsGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render () {
		return(
			<div class="container">
				<figure class="item-a">
					<img src="https://vibu-a.s3.us-east-2.amazonaws.com/1.jpg" />
				</figure>
				<figure class="item-b">
					<img src="https://vibu-a.s3.us-east-2.amazonaws.com/2.jpg" />
				</figure>
				<figure class="item-c">
					<img src="https://vibu-a.s3.us-east-2.amazonaws.com/3.jpg" />
				</figure>
			</div>
		);
	}
}

export default RecentsGrid