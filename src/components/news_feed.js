import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
		const { updateUserHasTouched, userHasTouched, handleMouseCoordinates, hBlocksFiltered } = this.props;
		
		return(
			<div className="News-feed" style={{top: `${this.state.topOffset}px`, left: `${this.state.leftOffset}px`}}>
				<div className="News-feed-item-header News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<AdWidget updateUserHasTouched={updateUserHasTouched} 
									userHasTouched={userHasTouched} 
									handleMouseCoordinates={handleMouseCoordinates} 
									hBlocksFiltered={hBlocksFiltered}/>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
				<div className="News-feed-item-blank News-feed-item"></div>
			</div>
		)
	}
};
NewsFeed.propTypes = {
	updateUserHasTouched: PropTypes.func.isRequired,
	handleMouseCoordinates: PropTypes.func.isRequired,
	hBlocksFiltered: PropTypes.array.isRequired,
	userHasTouched: PropTypes.bool.isRequired
}