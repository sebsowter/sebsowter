export const WORK_LOADED = 'WORK_LOADED';

export const loadedWork = (data, pathname) => ({
	type: WORK_LOADED,
	data,
	pathname
});
