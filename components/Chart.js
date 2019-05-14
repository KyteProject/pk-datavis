import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import * as d3 from 'd3';

const Handle = Slider.Handle,
	wrapperStyle = { width: 400, margin: 50 };

const handle = ( props ) => {
	const { value, dragging, index, ...restProps } = props;

	return (
		<Tooltip key={index} prefixCls='rc-slider-tooltip' overlay={value} visible={dragging} placement='top'>
			<Handle value={value} {...restProps} />
		</Tooltip>
	);
};

const Chart = () => {
	const [ date, setDate ] = useState( 5 );

	useEffect(
		() => {
			console.log( date );
		},
		[ date ]
	);

	return (
		<div className='App'>
			<div>
				<div style={wrapperStyle}>
					<p>Change month</p>
					<Slider min={1} max={12} defaultValue={date} handle={handle} onChange={setDate} />
				</div>

				{/* <PieChart data={data} width={200} height={200} innerRadius={60} outerRadius={100} /> */}
			</div>
		</div>
	);
};

export default Chart;
