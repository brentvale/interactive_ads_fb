import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AdWidgetLayerOneRecordDraw extends Component{
	constructor(){
		super();
	}
	
	render(){
		const { handleMouseCoordinates, updateUserHasTouched, userHasTouched } = this.props;
		if( userHasTouched ){
			return(
				<div className="Widget-layer-1" onMouseMove={handleMouseCoordinates}> 
				
				</div>
			)
		} else {
			return(
				<div className="Widget-layer-1" onMouseMove={handleMouseCoordinates} onMouseEnter={updateUserHasTouched}> 
				
				</div>
			)
		}
	}
}
AdWidgetLayerOneRecordDraw.propTypes = {
	updateUserHasTouched: PropTypes.func.isRequired,
	handleMouseCoordinates: PropTypes.func.isRequired,
	userHasTouched: PropTypes.bool.isRequired
}