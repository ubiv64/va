//import LeftButton from './LeftButton';
//import RightButton from './RightButton';

import React from 'react';
import '../styles/Slider.css';

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {index: 0};
	}


	getImages(array) {
		let images = array.map(image => {
			return <img id={image} className="imageList" src={require(`../assets/${image}.jpg`)} />;
		});
		return(
			this.renderSlides(images)
		);
	}

	handleClick(){
		this.setState(state => {
			return (state.index === this.props.array.length-1) ? {index: 0} : {index: state.index+1}
		});
	}

	renderSlides(images){
		return(
			<button onClick={() => this.handleClick()}>
				{images[this.state.index]}
			</button>
		);
	}
 
	//handleScroll
		//onScroll handler

	render() {
		const view = this.getImages(this.props.array);
		
		return (
			<div>{view}</div>
		);
	}
}

export default Slider