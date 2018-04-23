import React, { Component } from 'react';

export default class GameCard extends Component {
	handleClick() {
    	this.props.onClick(this.props);
  	}
	render () {
		const style = {
			backgroundImage: 'url('+process.env.PUBLIC_URL + this.props.image+')'
		}
		return (
			<div class = "card" onClick={this.handleClick.bind(this)} >
            	<div class = "game_image" style = {style}></div>
            	<div class = "game_title">{this.props.name}</div>
          	</div>
        );
	}
	
}

GameCard.defaultProps = {
	name: "Game Title"
};