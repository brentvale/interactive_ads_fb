import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import AdWidget from './ad_widget';

it('renders without crashing', () => {
	shallow(<AdWidget/>)
});

