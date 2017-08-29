import React, {Component} from 'react';

import AdWidgetLayerOneRecordDraw from './ad_widget_layer_1_record_draw';
import AdWidgetLayerTwoContentDisplay from './ad_widget_layer_2_content_display';
import AdWidgetLayerThreeFill from './ad_widget_layer_3_fill';

const LEFT_X_BOUND = 50;
const BOTTOM_Y_BOUND = 100;
const WIDTH = 145;
const HEIGHT = 75;

export default class AdWidget extends Component{
	constructor(){
		super();
		this.state = {
			userHasTouched: false,
			//keep array of all recorded mouse coordinates to detect other possible values
			//ex: users interest or frustration with the ad
			mouseCoords: new Array(),
			//coordinates of slices of the 'h' bed for hotel tonight
			hBlockCoords: [	{leftX: 50, bottomY: 50, width: 20, height: 25, filled: false},   //left side
											{leftX: 50, bottomY: 75, width: 20, height: 25, filled: false},  //left side
											{leftX: 50, bottomY: 100, width: 20, height: 25, filled: false},  //left side
											{leftX: 70, bottomY: 80, width: 35, height: 20, filled: false},   //bridge
											{leftX: 105, bottomY: 80, width: 35, height: 20, filled: false},  //bridge
											{leftX: 140, bottomY: 80, width: 35, height: 20, filled: false},  //bridge
											{leftX: 175, bottomY: 80, width: 20, height: 20, filled: false},  //right side
											{leftX: 175, bottomY: 100, width: 20, height: 20, filled: false} //right side
										],
			filledToCompletion: false
		};
		this.filterBlocksByFilled = this.filterBlocksByFilled.bind(this);
		this.handleMouseCoordinates = this.handleMouseCoordinates.bind(this);
		this.mouseCoordsInsideBlock = this.mouseCoordsInsideBlock.bind(this);
		this.updateUserHasTouched = this.updateUserHasTouched.bind(this);
	}
	
	componentDidUpdate(){
		if(this.state.hBlockCoords.length === this.filterBlocksByFilled().length && !this.state.filledToCompletion){
			setTimeout(() => {
				alert("You've claimed your Hotel Tonight Voucher!");
			}, 300);
			this.setState({filledToCompletion: true});
		}
	}
	
	filterBlocksByFilled(){
		const hBlocksFiltered = this.state.hBlockCoords.filter((el) => {
															return el.filled;
														});
		return hBlocksFiltered;
	}
	
	handleMouseCoordinates(e){
		let newMouseCoords = this.state.mouseCoords.slice(0);
		
		let containerCoords = e.currentTarget.getBoundingClientRect();
		let xPos = containerCoords.left;
		let yPos = containerCoords.top;
		
		//if the x, y coordinates fall within a possible fill block
		let targetIdxToFill = this.mouseCoordsInsideBlock({x: e.clientX - xPos, y: e.clientY - yPos});
		
		newMouseCoords.push({x: e.clientX - xPos, y: e.clientY - yPos});
		
		if(targetIdxToFill){
			let newHblockCoords = this.state.hBlockCoords.slice(0);
			newHblockCoords[targetIdxToFill.idx].filled = true;
			this.setState({mouseCoords: newMouseCoords, hBlockCoords: newHblockCoords});
		} else {
			this.setState({mouseCoords: newMouseCoords});
		}
	}
	
	mouseCoordsInsideBlock(coords){
		//manually calculated bounds to be {leftX: 50, bottomY: 100, width: 145, height: 75}
		if(coords.x < LEFT_X_BOUND || coords.x > (LEFT_X_BOUND + WIDTH) || coords.y > BOTTOM_Y_BOUND || coords.y < (BOTTOM_Y_BOUND - HEIGHT)){
			return false;
		}
		
		for(let i = 0; i < this.state.hBlockCoords.length; i ++){
			const targetIdx = i;
			const blockCoords = this.state.hBlockCoords[i];
			if(coords.x >= blockCoords.leftX && coords.x <= blockCoords.leftX+blockCoords.width && coords.y <= blockCoords.bottomY && coords.y >= blockCoords.bottomY-blockCoords.height ){
				//wrap in object otherwise 0 evaluated as false
				return {idx: targetIdx};
			}
		}
		return false;
	}
	
	updateUserHasTouched(){
		this.setState({userHasTouched: true});
	}
	
	render(){
		const hBlocksFiltered = this.filterBlocksByFilled();
		
		return(
			<div className="Widget-container">
				<AdWidgetLayerOneRecordDraw updateUserHasTouched={this.updateUserHasTouched} 
																		handleMouseCoordinates={this.handleMouseCoordinates} 
																		userHasTouched={this.state.userHasTouched}/>
				<AdWidgetLayerTwoContentDisplay />
				<AdWidgetLayerThreeFill userHasTouched={this.state.userHasTouched} 
																hBlocksFiltered={hBlocksFiltered}/>
			</div>
		);
	}
}