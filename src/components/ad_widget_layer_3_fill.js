import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AdWidgetLayerThreeFill extends Component{
	constructor(){
		super();
	}
	
	render(){
		const { userHasTouched, hBlockCoords } = this.props;
	
		if(userHasTouched){
			//Sample el of hBlockCoords {leftX: 175, bottomY: 100, width: 20, height: 20, filled: false}
			const hBlocksFiltered = hBlockCoords.filter((el) => {
				if(el.filled){
					return true;
				} else {
					return false;
				}
			});
			const hBlocksDisplay = hBlocksFiltered.map((el, idx) => {
				return <span key={idx} style={{	position: 'absolute', 
																				backgroundColor: '#3b5998',
																				top: `${el.bottomY - el.height}px`, 
																				left: `${el.leftX}px`, 
																				height: `${el.height}px`,
																				width: `${el.width}px`}}></span>;
			})											
			return(
				<div  className="Widget-layer-3">
					{hBlocksDisplay}
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
	hBlockCoords: PropTypes.array.isRequired,
	userHasTouched: PropTypes.bool.isRequired,	
}