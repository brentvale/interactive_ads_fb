import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import AdWidgetLayerThreeFill from './ad_widget_layer_3_fill';

it('renders without crashing', () => {
	shallow(<AdWidgetLayerThreeFill />);
});