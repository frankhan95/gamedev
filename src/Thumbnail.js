import React, { Component } from 'react';

export default class Thumbnail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src:""
		}
	}

	handleClick() {
		this.props.onClick(this.props.src);
	}
	render () {
		const style = {
			backgroundImage: 'url('+process.env.PUBLIC_URL + this.props.src+')'
		}
		return (<div class = "thumbnail" style = {style} onClick = {this.handleClick.bind(this)}></div>);
	}
}
