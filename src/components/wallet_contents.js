import React, {Component} from 'react';

import HotelTonightCoupon from '../images/hotel_tonight_coupon.png';
import PatagoniaCoupon from '../images/patagonia_logo.png';

export default class WalletContents extends Component{
	render(){
		return(
			<div className="Wallet-contents expanded">
				<div style={{position: "relative", textAlign: 'center'}}>
					<img className="Wallet-contents-icon" src={HotelTonightCoupon} alt="hotel tonight voucher" />
					<div className="Wallet-contents-icon empty hotel-tonight"></div>
					<div className="Wallet-contents-icon empty hotel-tonight"></div>
					<div className="Wallet-contents-icon empty hotel-tonight"></div>
					<p>25% Off Next Stay!</p>
				</div>
			
				<hr style={{color: '#e7e7e7', width: '90%', marginLeft: '5%'}}/>
			
				<div style={{position: "relative", textAlign: 'center'}}>
					<img className="Wallet-brand-display" src={PatagoniaCoupon} alt="Patagonia Brand" />
					<div className="Wallet-contents-icon empty patagonia"></div>
					<div className="Wallet-contents-icon empty patagonia"></div>
					<div className="Wallet-contents-icon empty patagonia"></div>
					<div className="Wallet-contents-icon empty patagonia"></div>
					<p>80% Off Winter Jacket!</p>
				</div>
			</div>
		)
	}
}