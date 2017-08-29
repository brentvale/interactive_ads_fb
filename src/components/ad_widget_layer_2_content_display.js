import React, {Component} from 'react';
import AdBackground from '../images/hotel_tonight_ad.png';

export default class AdWidgetLayerTwoContentDisplay extends Component{
	constructor(){
		super();
	}
	
	render(){
		return(
			<div className="Widget-layer-2">
				<img src={AdBackground} alt="advertisement"/>
			</div>
		)
	}
}