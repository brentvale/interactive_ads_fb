import React, {Component} from 'react';

import AdWidget from './ad_widget';

export default class NewsFeed extends Component{
	constructor(){
		super();
		this.state = {
			leftOffset: 300,
			topOffset: 50
		}
	}
	render(){
		return(
			<div className="News-feed" style={{top: `${this.state.topOffset}px`, left: `${this.state.leftOffset}px`}}>
				<div className="News-feed-item-header News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<AdWidget/>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
			</div>
		)
	}
};