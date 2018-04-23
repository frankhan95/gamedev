import React, { Component } from 'react';
import Thumbnail from './Thumbnail';

export default class Slideshow extends Component {
	render () {
		let ht = this.props.showMe ? "block" : "none";
		const style = {
			display: ht
		}
		let viewStyle = {
			backgroundImage: 'url('+process.env.PUBLIC_URL + this.props.currentImage+')'
		}
		return (
			<div id = "popout" style = {style}>
			    <div id = "viewport" style = {viewStyle}>{}</div>
			    <div id = "descript">
			    	<h2>{this.props.title}</h2>
			    	<h5>{this.props.tagline}</h5>
			    	{this.props.descript}
			    </div>
			    <div id = "exit" onClick = {this.props.hideMe}>✖</div>
		    	<div id = "images">
		    		{this.props.thumbnails}
		    	</div>
		    </div>
        );
	}
}
