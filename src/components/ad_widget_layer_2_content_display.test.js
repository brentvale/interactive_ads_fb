import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import AdWidgetLayerTwoContentDisplay from './ad_widget_layer_2_content_display';

it('renders without crashing', () => {
	shallow(<AdWidgetLayerTwoContentDisplay />);
});