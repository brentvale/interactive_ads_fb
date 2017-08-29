import React, {Component} from 'react';

import HotelTonightCoupon from '../images/hotel_tonight_coupon.png';

export default class WalletContents extends Component{
	render(){
		return(
			<div className="Wallet-contents expanded">
				<img className="Wallet-contents-icon" src={HotelTonightCoupon} alt="hotel tonight voucher" />
			</div>
		)
	}
}