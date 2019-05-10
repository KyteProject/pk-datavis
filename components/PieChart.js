import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Pie = ( props ) => {
	const ref = useRef( null ),
		format = d3.format( '.2f' ),
		colours = d3.scaleOrdinal( d3.schemeCategory10 ),
		createPie = d3
			.pie()
			.value( ( d ) => d.value )
			.sort( null ),
		createArc = d3
			.arc()
			.innerRadius( props.innerRadius )
			.outerRadius( props.outerRadius );

	useEffect(
		() => {
			const data = createPie( props.data ),
				group = d3.select( ref.current ),
				groupWithData = group.selectAll( 'g.arc' ).data( data );

			groupWithData.exit().remove();

			const groupWithUpdate = groupWithData
				.enter()
				.append( 'g' )
				.attr( 'class', 'arc' );

			const path = groupWithUpdate.append( 'path' ).merge( groupWithData.select( 'path.arc' ) ),
				text = groupWithUpdate.append( 'text' ).merge( groupWithData.select( 'text' ) );

			path
				.attr( 'class', 'arc' )
				.attr( 'd', createArc )
				.attr( 'fill', ( d, i ) => colours( i ) );

			text
				.attr( 'text-anchor', 'middle' )
				.attr( 'alignment-baseline', 'middle' )
				.attr( 'transform', ( d ) => `translate(${createArc.centroid( d )})` )
				.style( 'fill', 'white' )
				.style( 'font-size', 10 )
				.text( ( d ) => format( d.value ) );
		},
		[ colours, createArc, createPie, format, props.data ]
	);

	return (
		<svg width={props.width} height={props.height}>
			<g ref={ref} transform={`translate(${props.outerRadius} ${props.outerRadius})`} />
		</svg>
	);
};

export default Pie;
