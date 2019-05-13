import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import * as d3 from 'd3';
import PieChart from './PieChart';

const createSliderWithTooltip = Slider.createSliderWithTooltip,
	Range = createSliderWithTooltip( Slider.Range ),
	Handle = Slider.Handle,
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
	const generateData = ( value, length = 5 ) =>
		d3.range( length ).map( ( item, index ) => ( {
			date: index,
			value: value === null || value === undefined ? Math.random() * 100 : value
		} ) );

	const [ data, setData ] = useState( generateData() ),
		[ date, setDate ] = useState( '1' );

	const changeData = () => {
		setData( generateData() );
	};

	useEffect(
		() => {
			setData( generateData() );
		},
		[ !data ]
	);

	return (
		<div className='App'>
			<div>
				<button onClick={changeData}>Transform</button>
			</div>
			<div>
				<span className='label'>Chart</span>
				<div style={wrapperStyle}>
					<p>Slider with custom handle</p>
					<Slider min={1} max={12} defaultValue={5} handle={handle} />
				</div>

				{/* <PieChart data={data} width={200} height={200} innerRadius={60} outerRadius={100} /> */}
			</div>
		</div>
	);
};

export default Chart;
