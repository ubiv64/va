import React, { Component } from 'react';

import '../styles/PopUp.css';

class PopUp extends Component {
	constructor(props) {
		super(props)
		this.state = {index: 0}
	}

	handleClick(){
		this.setState(state => {
			return (state.index === this.props.images.length-1) ? {index: 0} : {index: state.index+1}
		});
	}

	renderSlides(images){
		return(
			<button className='button' onClick={() => this.handleClick()}>
				{images[this.state.index]}
			</button>
		);
	}

	render() {
		const popUp = this.renderSlides(this.props.images)

		return(
			<div>{popUp}</div>
		);
	}
}

export default PopUp