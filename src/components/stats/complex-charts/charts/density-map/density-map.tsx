import * as d3 from "d3";
import React, { useCallback } from "react";
import { useStatsStore } from "../../../store/stats-store";
import { useCityBoundariesGeojson } from "./hooks/use-city-boundaries-geojson.tsx";
import { CityBoundariesPaths } from "./city-boundaries-paths.tsx";
import { DensityContours } from "./density-contours";
import { Legend } from "./legend";

/**
 * This density map chart highlights the distribution of the waterings.
 */
export const DensityMap: React.FC = () => {
	const { chartWidth: width, chartHeight: height } = useStatsStore();
	const cityBoundariesGeoJson = useCityBoundariesGeojson();

	const svgMargin = { top: 0, right: 0, bottom: 5, left: 0 };
	const innerHeight = height - svgMargin.top - svgMargin.bottom;
    const centerLong = import.meta.env.VITE_MAP_CENTER_LNG;
    const centerLat = import.meta.env.VITE_MAP_CENTER_LAT;

	const scale = width < height ? width / 0.008 : height / 0.008;

	const projection = useCallback(
		d3
			.geoMercator()
			.center([centerLong, centerLat])
			.translate([width / 2, innerHeight / 2])
			.scale(scale),
		[width, height, scale],
	);

	return (
		<svg width={width} height={height}>
            <CityBoundariesPaths
                projection={projection}
                cityBoundariesGeoJson={cityBoundariesGeoJson}
            />

			<DensityContours projection={projection} />

			<Legend />
		</svg>
	);
};
