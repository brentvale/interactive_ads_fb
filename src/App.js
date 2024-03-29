import React, { Component } from 'react';

import NewsFeed from './components/news_feed';
import WalletDisplay from './components/wallet_display';

import logo from './logo.svg';
import './App.css';

const LEFT_X_BOUND = 50;
const BOTTOM_Y_BOUND = 100;
const WIDTH = 145;
const HEIGHT = 75;

class App extends Component {
	constructor(){
		super();
		this.state = {
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
			filledToCompletion: false,
			userHasTouched: false,
			userIsMobile: false
		};
		this.filterBlocksByFilled = this.filterBlocksByFilled.bind(this);
		this.handleMouseCoordinates = this.handleMouseCoordinates.bind(this);
		this.mouseCoordsInsideBlock = this.mouseCoordsInsideBlock.bind(this);
		this.updateUserHasTouched = this.updateUserHasTouched.bind(this);
	}
	
	componentDidMount(){
		var mobileCheck = false;
		//npm mobile-detect
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) mobileCheck = true;})(navigator.userAgent||navigator.vendor||window.opera);
		if(mobileCheck){
			this.setState({userIsMobile: true});
			
		} else {
			this.setState({userIsMobile: false});
		}
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
	
  render() {
		const hBlocksFiltered = this.filterBlocksByFilled();
		const walletDisplay = this.state.filledToCompletion ? <WalletDisplay /> : "";
		
		if(this.state.userIsMobile){
	    return (
	      <div className="App-mobile">
					<h2>Thanks for stopping by!</h2>
					<h3>This demo has not been optimized for mobile yet, so head on over to your desktop!</h3>
					<p>But what about mobile first??? Well, it was a little easier to create the ads interactivity on desktop for a few reasons which I&#39;d love to chat more&nbsp;about!</p>
	      </div>
	    );
		} else {
	    return (
	      <div className="App">
					<div style={{width: "100%", backgroundColor: "#30599d", height: "38px", position: "absolute", zIndex: "-1" }}></div>
					<div className="Layout-container">
					</div>
				
					<NewsFeed updateUserHasTouched={this.updateUserHasTouched} 
										userHasTouched={this.state.userHasTouched} 
										handleMouseCoordinates={this.handleMouseCoordinates} 
										hBlocksFiltered={hBlocksFiltered}/>
									
					{walletDisplay}
	      </div>
	    );
		}
  }
}

export default App;
