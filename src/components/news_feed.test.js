import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import NewsFeed from './news_feed';

it('renders without crashing', () => {
	shallow(<NewsFeed />)
});