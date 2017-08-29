import React, {Component} from 'react';
import WalletIcon from '../images/wallet_icon.png';
import WalletContents from './wallet_contents';

export default class WalletDisplay extends Component{
	constructor(){
		super();
		this.state = {
			walletOpen: false
		}
	}
	
	render(){
		let klassName, walletContents;
		if(this.state.walletOpen){
			klassName = 'Wallet-icon-container notifications expanded';
			walletContents = <WalletContents />;
		} else {
			klassName = 'Wallet-icon-container notifications';
			walletContents = "";
		}
		
		return(
			<div className={klassName}>
				<img src={WalletIcon} className="Wallet-icon" alt="Wallet Icon" />
				<div className="Wallet-notification">1</div>
			</div>
		)
	}
};
