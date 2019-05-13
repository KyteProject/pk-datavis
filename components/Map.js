import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Datamap } from 'datamaps';
const topo = require( 'topojson' );

try {
	d3.json( '../assets/world-topo-min.json', ( error, world ) => {} );
} catch ( err ) {
	//
}

const Map = ( props ) => {
	const projection = d3.geo.mercator();
	const map = new DataMap();

	return <svg width={props.width} height={props.height} />;
};

export default Map;

<Map width={900} height={600} />;
