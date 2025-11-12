import { create } from "zustand";
import { replaceUrlSearchParam } from "../../utils/url-utils";
import { useUrlState } from "../router/store";
import { useMapConstants } from "../map/hooks/use-map-constants";
import { useTreeStore } from "../tree-detail/stores/tree-store";
import { useI18nStore } from "../../i18n/i18n-store.ts";
export interface TreeAgeRange {
	min: number;
	max: number;
}

export interface FilterState {
	areOnlyAllAdoptedTreesVisible: boolean;
	areLastWateredTreesVisible: boolean;
	isFilterViewVisible: boolean;
	isSomeFilterActive: () => boolean;
	getAmountOfActiveFilters: () => number;
	lat: number;
	lng: number;
	zoom: number;
	initialTreeAgeRangeMin: number;
	initialTreeAgeRangeMax: number;
	treeAgeRange: TreeAgeRange;
	setTreeAgeRange: (min: number, max: number) => void;
	setAreOnlyAllAdoptedTreesVisible: (showOnlyAllAdoptedTrees: boolean) => void;
	setAreLastWateredTreesVisible: (showLastWateredTrees: boolean) => void;
	resetFilters: () => void;
	setLat: (lat: number) => void;
	setLng: (lng: number) => void;
	setZoom: (zoom: number) => void;
	hideFilterView: () => void;
	showFilterView: () => void;
	toggleFilterView: () => void;
	recoverUrlParams: () => void;
	recoverLanguageParams: () => void;
}

const initialTreeAgeRange = {
	min: 0,
	max: 200,
};

const treeAgeUrlKeyMin = "treeAgeMin";
const treeAgeUrlKeyMax = "treeAgeMax";
const isPumpsVisibleUrlKey = "isPumpsVisible";
const areOnlyAllAdoptedTreesVisibleKey = "areOnlyAllAdoptedTreesVisible";
const areLastWateredTreesVisibleKey = "isLastWateredTreesVisible";
const zoomUrlKey = "zoom";
const latUrlKey = "lat";
const lngUrlKey = "lng";

const isPumpsVisibleSearch = new URL(window.location.href).searchParams.get(
	isPumpsVisibleUrlKey,
);

const areOnlyAllAdoptedTreesVisibleSearch = new URL(
	window.location.href,
).searchParams.get(areOnlyAllAdoptedTreesVisibleKey);

const areLastWateredTreesVisibleSearch = new URL(
	window.location.href,
).searchParams.get(areLastWateredTreesVisibleKey);

const ageRangeMinSearch = new URL(window.location.href).searchParams.get(
	treeAgeUrlKeyMin,
);
const ageRangeMaxSearch = new URL(window.location.href).searchParams.get(
	treeAgeUrlKeyMax,
);

const zoomSearch = new URL(window.location.href).searchParams.get(zoomUrlKey);
const latSearch = new URL(window.location.href).searchParams.get(latUrlKey);
const lngSearch = new URL(window.location.href).searchParams.get(lngUrlKey);

export const useFilterStore = create<FilterState>()((set, get) => ({
	initialTreeAgeRangeMin: initialTreeAgeRange.min,
	initialTreeAgeRangeMax: initialTreeAgeRange.max,

	treeAgeRange: {
		min: ageRangeMinSearch
			? parseInt(ageRangeMinSearch)
			: initialTreeAgeRange.min,
		max: ageRangeMaxSearch
			? parseInt(ageRangeMaxSearch)
			: initialTreeAgeRange.max,
	},

	isPumpsVisible: isPumpsVisibleSearch === "true",

	areOnlyAllAdoptedTreesVisible: areOnlyAllAdoptedTreesVisibleSearch === "true",

	areLastWateredTreesVisible: areLastWateredTreesVisibleSearch === "true",

	isFilterViewVisible: false,

	lat: latSearch ? parseFloat(latSearch) : useMapConstants().MAP_CENTER_LAT,
	lng: lngSearch ? parseFloat(lngSearch) : useMapConstants().MAP_CENTER_LNG,
	zoom: zoomSearch
		? parseFloat(zoomSearch)
		: useMapConstants().MAP_INITIAL_ZOOM_LEVEL,
	isSomeFilterActive: () => {
		return (
			get().treeAgeRange.min !== initialTreeAgeRange.min ||
			get().treeAgeRange.max !== initialTreeAgeRange.max ||
			get().areLastWateredTreesVisible ||
			get().areOnlyAllAdoptedTreesVisible
		);
	},
	getAmountOfActiveFilters: () => {
		let amount = 0;

		if (get().areOnlyAllAdoptedTreesVisible) {
			amount = amount + 1;
		}

		if (
			get().treeAgeRange.min !== initialTreeAgeRange.min ||
			get().treeAgeRange.max !== initialTreeAgeRange.max
		) {
			amount = amount + 1;
		}

		if (get().areLastWateredTreesVisible) {
			amount = amount + 1;
		}

		return amount;
	},

	setAreOnlyAllAdoptedTreesVisible: (showOnlyAllAdoptedTrees) => {
		set({ areOnlyAllAdoptedTreesVisible: showOnlyAllAdoptedTrees });

		const url = new URL(window.location.href);
		const updatedSearchParams = replaceUrlSearchParam(
			url,
			areOnlyAllAdoptedTreesVisibleKey,
			[showOnlyAllAdoptedTrees ? "true" : "false"],
		);
		useUrlState.getState().setSearchParams(updatedSearchParams);
	},

	setAreLastWateredTreesVisible: (showLastWateredTrees) => {
		set({ areLastWateredTreesVisible: showLastWateredTrees });
		set({ areOnlyAllAdoptedTreesVisible: false });

		const url = new URL(window.location.href);
		const updatedSearchParams = replaceUrlSearchParam(
			url,
			areLastWateredTreesVisibleKey,
			[showLastWateredTrees ? "true" : "false"],
		);
		useUrlState.getState().setSearchParams(updatedSearchParams);
	},

	setTreeAgeRange: (min, max) => {
		set({ treeAgeRange: { min, max } });

		// Update search params in URL
		const updatedSearchParamsMin = replaceUrlSearchParam(
			new URL(window.location.href),
			treeAgeUrlKeyMin,
			[get().treeAgeRange.min.toString()],
		);
		useUrlState.getState().setSearchParams(updatedSearchParamsMin);

		const updatedSearchParamsMax = replaceUrlSearchParam(
			new URL(window.location.href),
			treeAgeUrlKeyMax,
			[get().treeAgeRange.max.toString()],
		);
		useUrlState.getState().setSearchParams(updatedSearchParamsMax);
	},

	resetFilters: () => {
		useUrlState.getState().removeSearchParam(treeAgeUrlKeyMin);
		useUrlState.getState().removeSearchParam(areOnlyAllAdoptedTreesVisibleKey);
		useUrlState.getState().removeSearchParam(areLastWateredTreesVisibleKey);
		set({
			treeAgeRange: initialTreeAgeRange,
			areOnlyAllAdoptedTreesVisible: false,
			areLastWateredTreesVisible: false,
		});
	},

	setLat: (lat) => {
		useUrlState.getState().addSearchParam("lat", lat.toString());
		set({ lat });
	},

	setLng: (lng) => {
		useUrlState.getState().addSearchParam("lng", lng.toString());
		set({ lng });
	},

	setZoom: (zoom) => {
		useUrlState.getState().addSearchParam("zoom", zoom.toString());
		set({ zoom });
	},

	hideFilterView: () => {
		set({ isFilterViewVisible: false });
	},

	showFilterView: () => {
		set({ isFilterViewVisible: true });
	},

	toggleFilterView: () => {
		set((state) => ({ isFilterViewVisible: !state.isFilterViewVisible }));
	},

	recoverUrlParams: () => {
		useUrlState.getState().addSearchParam("lat", get().lat.toString());
		useUrlState.getState().addSearchParam("lng", get().lng.toString());
		useUrlState.getState().addSearchParam("zoom", get().zoom.toString());
		useUrlState
			.getState()
			.addSearchParam(
				"areOnlyAllAdoptedTreesVisible",
				get().areOnlyAllAdoptedTreesVisible.toString(),
			);

		const updatedSearchParamsMin = replaceUrlSearchParam(
			new URL(window.location.href),
			treeAgeUrlKeyMin,
			[get().treeAgeRange.min.toString()],
		);
		useUrlState.getState().setSearchParams(updatedSearchParamsMin);

		const updatedSearchParamsMax = replaceUrlSearchParam(
			new URL(window.location.href),
			treeAgeUrlKeyMax,
			[get().treeAgeRange.max.toString()],
		);
		useUrlState.getState().setSearchParams(updatedSearchParamsMax);

		const treeId = useTreeStore.getState().selectedTreeId;
		if (treeId) {
			useUrlState.getState().addSearchParam("treeId", treeId);
		}
	},
	recoverLanguageParams: () => {
		useUrlState
			.getState()
			.addSearchParam("lang", useI18nStore.getState().language);
	},
}));
