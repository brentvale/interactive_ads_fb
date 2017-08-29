import React, {Component} from 'react';
import WalletIcon from '../images/wallet_icon.png';
import WalletContents from './wallet_contents';

export default class WalletDisplay extends Component{
	constructor(){
		super();
		this.state = {
			notifications: 1,
			walletOpen: false
		};
		this.handleOpenWallet = this.handleOpenWallet.bind(this);
	}
	
	handleOpenWallet(){
		if(this.state.walletOpen){
			this.setState({walletOpen: false});
		} else {
			this.setState({notifications: 0, walletOpen: true});
		}
	}
	
	render(){
		let klassName, walletContents;
		if(this.state.walletOpen){
			klassName = 'Wallet-icon-container notifications expanded';
			walletContents = <WalletContents/>;
		} else {
			klassName = 'Wallet-icon-container notifications';
			walletContents = "";
		}
		
		let notificationsNumberDisplay = (this.state.notifications > 0) ? <div className="Wallet-notification">{this.state.notifications}</div> : "";
		
		return(
			<div className={klassName} onClick={this.handleOpenWallet}>
				<img src={WalletIcon} className="Wallet-icon" alt="Wallet Icon" />
				{notificationsNumberDisplay}
				
				{walletContents}
			</div>
		)
	}
};
