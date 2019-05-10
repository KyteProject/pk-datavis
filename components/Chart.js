import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

const Chart = () => {
	const generateData = ( value, length = 5 ) =>
		d3.range( length ).map( ( item, index ) => ( {
			date: index,
			value: value === null || value === undefined ? Math.random() * 100 : value
		} ) );

	const [ data, setData ] = useState( generateData() );

	const changeData = () => {
		setData( generateData() );
	};

	return (
		<div className='App'>
			<div>
				<button onClick={changeData}>Transform</button>
			</div>
			<div>
				<span className='label'>Chart</span>
			</div>
		</div>
	);
};

export default Chart;
