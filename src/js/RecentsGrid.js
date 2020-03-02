import React, { Component } from 'react';

import '../styles/RecentsGrid.css';

class RecentsGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render () {
		return(
			<div className="container">
				<div id="1" className="item-a">
					<img src="https://vibu-a.s3.us-east-2.amazonaws.com/1.jpg" />
				</div>
				<div className="item-b">
					<img src="https://vibu-a.s3.us-east-2.amazonaws.com/2.jpg" />
				</div>
				<div className="item-c">
					<img src="https://vibu-a.s3.us-east-2.amazonaws.com/3.jpg" />
				</div>


			</div>
		);
	}
}

export default RecentsGrid