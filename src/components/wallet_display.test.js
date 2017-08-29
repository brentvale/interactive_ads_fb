import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import WalletDisplay from './wallet_display';

it('renders without crashing', () => {
	shallow(<WalletDisplay />)
})
