import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesRefernceLine } from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
		<div>
			<Sparklines heigth={120} width={180} data={props.data}>
            	<SparklinesLine color={props.color} />
				<SparklinesRefernceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}