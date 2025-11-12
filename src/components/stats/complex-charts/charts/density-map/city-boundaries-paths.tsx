import React, { useMemo } from "react";
import * as d3 from "d3";
import { FeatureCollection } from "geojson";

interface CityBoundariesPaths {
	cityBoundariesGeoJson: FeatureCollection | null;
	projection: d3.GeoProjection;
}

export const CityBoundariesPaths: React.FC<CityBoundariesPaths> = ({
    cityBoundariesGeoJson,
	projection,
}) => {
	const cityBoundariesPaths = useMemo(() => {
		if (!cityBoundariesGeoJson) {
			return [];
		}

		const geoGenerator = d3.geoPath().projection(projection);

		return cityBoundariesGeoJson.features.map(
			(feature: d3.GeoPermissibleObjects) => geoGenerator(feature),
		);
	}, [cityBoundariesGeoJson, projection]);

	return (
		<>
			{cityBoundariesPaths.map((path, i) => (
				<path
					key={i}
					className="district"
					d={path ?? ""}
					fill="#e2e2e2"
					stroke="#ffffff"
					strokeWidth={1}
				/>
			))}
		</>
	);
};
