import React, {Component} from 'react';

import AdWidgetLayerOneRecordDraw from './ad_widget_layer_1_record_draw';
import AdWidgetLayerTwoContentDisplay from './ad_widget_layer_2_content_display';
import AdWidgetLayerThreeFill from './ad_widget_layer_3_fill';

export default class AdWidget extends Component{
	constructor(){
		super();
		this.state = {
			userHasTouched: false,
			mouseCoords: new Array()
		};
		this.updateUserHasTouched = this.updateUserHasTouched.bind(this);
		this.handleMouseCoordinates = this.handleMouseCoordinates.bind(this);
	}
	
	updateUserHasTouched(){
		this.setState({userHasTouched: true});
	}
	
	handleMouseCoordinates(e){
		let newMouseCoords = this.state.mouseCoords.slice(0);
		newMouseCoords.push({x: e.clientX, y: e.clientY});
		this.setState({mouseCoords: newMouseCoords});
	}
	
	render(){
		return(
			<div className="Widget-container">
				<AdWidgetLayerOneRecordDraw updateUserHasTouched={this.updateUserHasTouched} 
																		handleMouseCoordinates={this.handleMouseCoordinates} 
																		userHasTouched={this.state.userHasTouched}/>
				<AdWidgetLayerTwoContentDisplay />
				<AdWidgetLayerThreeFill userHasTouched={this.state.userHasTouched} 
																mouseCoords={this.state.mouseCoords}/>
			</div>
		);
	}
}