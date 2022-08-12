export const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	latest: {
		type: `boolean`,
		default: false,
		alias: `l`,
		desc: `Get latest articles`
	},
	featured: {
		type: `boolean`,
		default: false,
		alias: `f`,
		desc: `Get featured articles`
	},
	user: {
		type: `string`,
		alias: `u`,
		desc: `Get articles by user`
	}
};
