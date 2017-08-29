import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import WalletContents from './wallet_contents';

it('renders without crashing', () => {
	shallow(<WalletContents />)
})
