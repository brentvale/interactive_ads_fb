import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import AdWidgetLayerOneRecordDraw from './ad_widget_layer_1_record_draw';

it('renders without crashing', () => {
	shallow(<AdWidgetLayerOneRecordDraw />);
});