import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AdWidgetLayerOneRecordDraw from './ad_widget_layer_1_record_draw';
import AdWidgetLayerTwoContentDisplay from './ad_widget_layer_2_content_display';
import AdWidgetLayerThreeFill from './ad_widget_layer_3_fill';

export default class AdWidget extends Component{
	render(){
		const { updateUserHasTouched, userHasTouched, handleMouseCoordinates, hBlocksFiltered } = this.props;
		
		return(
			<div className="Widget-container">
				<AdWidgetLayerOneRecordDraw updateUserHasTouched={updateUserHasTouched} 
																		handleMouseCoordinates={handleMouseCoordinates} 
																		userHasTouched={userHasTouched}/>
				<AdWidgetLayerTwoContentDisplay />
				<AdWidgetLayerThreeFill userHasTouched={userHasTouched} 
																hBlocksFiltered={hBlocksFiltered}/>
			</div>
		);
	}
}
AdWidget.propTypes = {
	updateUserHasTouched: PropTypes.func.isRequired,
	handleMouseCoordinates: PropTypes.func.isRequired,
	hBlocksFiltered: PropTypes.array.isRequired,
	userHasTouched: PropTypes.bool.isRequired
}