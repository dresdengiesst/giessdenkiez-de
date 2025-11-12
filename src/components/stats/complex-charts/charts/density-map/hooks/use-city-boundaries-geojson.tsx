import { useEffect, useState } from "react";
import { FeatureCollection } from "geojson";

export function useCityBoundariesGeojson() {
	const [geoJson, setGeoJson] = useState<FeatureCollection | null>(null);

	useEffect(() => {
		const abortController = new AbortController();

		const fetchData = async () => {
			const cityBoundariesRaw = await fetch(import.meta.env.VITE_BEZIRKE_URL, {
				signal: abortController.signal,
			});
			const cityBoundariesParsed = await cityBoundariesRaw.json();
			setGeoJson(cityBoundariesParsed);
		};

		fetchData().catch((error) => {
			if (error.name === "AbortError") {
				return;
			}

			console.error(error);
		});

		return () => abortController.abort();
	}, []);

	return geoJson;
}
