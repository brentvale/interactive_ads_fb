import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AdWidgetLayerThreeFill extends Component{
	constructor(){
		super();
	}
	
	render(){
		const { userHasTouched, mouseCoords } = this.props;
	
		if(userHasTouched){
			const mouseCoordsDisplay = mouseCoords.map((obj, idx) => {
				return <span key={idx} style={{position:'absolute', left: obj.x, top: obj.y, backgroundColor: 'blue', height: '10px', width: '10px'}}></span>
			});
			
			return(
				<div  className="Widget-layer-3">
					{ mouseCoordsDisplay }
				</div>
			)
		} else {
			return(
			<div id="animateBackground" className="Widget-layer-3">
				
			</div>
			)
		}
		
	}
}

AdWidgetLayerThreeFill.propTypes = {
	mouseCoords: PropTypes.array.isRequired,
	userHasTouched: PropTypes.bool.isRequired,	
}