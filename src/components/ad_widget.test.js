import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import AdWidget from './ad_widget';

it('renders without crashing', () => {
	shallow(<AdWidget/>)
});

const H_BLOCK_COORDS_STATE = {hBlockCoords: [	{leftX: 50, bottomY: 50, width: 20, height: 25, filled: false},   //left side
																							{leftX: 50, bottomY: 75, width: 20, height: 25, filled: false},  //left side
																							{leftX: 50, bottomY: 100, width: 20, height: 25, filled: false},  //left side
																							{leftX: 70, bottomY: 80, width: 35, height: 20, filled: false},   //bridge
																							{leftX: 105, bottomY: 80, width: 35, height: 20, filled: false},  //bridge
																							{leftX: 140, bottomY: 80, width: 35, height: 20, filled: false},  //bridge
																							{leftX: 175, bottomY: 80, width: 20, height: 20, filled: false},  //right side
																							{leftX: 175, bottomY: 100, width: 20, height: 20, filled: false} //right side
																						]
															};
describe('mouseCoordsInsideBlock', () => {
	it('returns index of h block from state that should be filled in', () => {
		const wrapper = shallow(<AdWidget />);
		wrapper.setState(H_BLOCK_COORDS_STATE);
										
		expect(wrapper.instance().mouseCoordsInsideBlock({x: 60, y: 85}).idx).to.equal(2);
	});
	
	it('returns false if target coords are out of bounding box', () => {
		const wrapper = shallow(<AdWidget />);
		wrapper.setState(H_BLOCK_COORDS_STATE);
										
		expect(wrapper.instance().mouseCoordsInsideBlock({x: 10, y: 10})).to.be.false;
	});
	
	it('returns false if target coords are within bounding box but not within a block', () => {
		const wrapper = shallow(<AdWidget />);
		wrapper.setState(H_BLOCK_COORDS_STATE);
										
		expect(wrapper.instance().mouseCoordsInsideBlock({x: 100, y: 40})).to.be.false;
	});
});

describe('filterBlocksByFilled', () => {
	it('returns blocks filtered by attribute filled', () => {
		const wrapper = shallow(<AdWidget />);
		wrapper.setState({hBlockCoords: Array.apply(null, Array(8)).map(() => {return {filled: true}})});
		expect(wrapper.instance().filterBlocksByFilled().length).to.equal(8);
	});
})
