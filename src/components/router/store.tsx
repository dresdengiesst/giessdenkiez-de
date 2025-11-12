import { create } from "zustand";
import { trackPageView } from "../matomo/utils/matomo";
import { URLSearchParams } from "url";

// Get base path from environment or default to empty string
// VITE_BASE_URL is a full URL (for tests), so we extract just the pathname
const getBasePath = () => {
	const viteBaseUrl = import.meta.env.VITE_BASE_URL;

	if (viteBaseUrl) {
		const url = new URL(viteBaseUrl);
		return url.pathname;
	}

	return '';
};

const BASE_PATH = getBasePath();

interface SetPathnameOptions {
	hasSameSearchParams?: boolean;
	hasSameHash?: boolean;
}

interface URLState {
	url: URL;
	basePath: string;
	setPathname: (url: string, options?: SetPathnameOptions) => void;
	setSearchParams: (searchParams: URLSearchParams) => void;
	addSearchParam: (key: string, value: string) => void;
	removeSearchParam: (keyToRemove: string) => void;
	getRelativePath: () => string;
}

let debounceTimeoutId: ReturnType<typeof setTimeout>;

export const useUrlState = create<URLState>()((set, get) => ({
	url: new URL(window.location.href),
	basePath: BASE_PATH,

	setPathname: (
		pathname,
		{ hasSameSearchParams = false, hasSameHash = false } = {},
	) => {
		// Ensure pathname starts with base path
		const fullPathname = pathname.startsWith(get().basePath)
			? pathname
			: get().basePath + pathname;

		const url = new URL(fullPathname, get().url.origin);

		if (hasSameSearchParams) {
			url.search = get().url.search;
		}

		if (hasSameHash) {
			url.hash = get().url.hash;
		}

		set({ url });

		window.history.pushState({}, "", url);
		trackPageView();
	},

	setSearchParams: (searchParams: URLSearchParams) => {
		const url = new URL(get().url);
		url.search = searchParams.toString();

		set({ url });

		clearTimeout(debounceTimeoutId);

		debounceTimeoutId = setTimeout(() => {
			window.history.pushState({}, "", url);
			trackPageView();
		}, 500);
	},

	addSearchParam: (key: string, value: string) => {
		const url = new URL(get().url);
		url.searchParams.set(key, value);
		const updatedSearchParams = url.searchParams;
		get().setSearchParams(updatedSearchParams);
	},

	removeSearchParam: (keyToRemove) => {
		const url = new URL(get().url);
		url.searchParams.delete(keyToRemove);
		const updatedSearchParams = url.searchParams;
		get().setSearchParams(updatedSearchParams);
	},

	getRelativePath: () => {
		const { pathname } = get().url;
		const basePath = get().basePath;

		// Remove base path from pathname to get relative path
		if (basePath && pathname.startsWith(basePath)) {
			return pathname.slice(basePath.length) || '/';
		}

		return pathname;
	},
}));
