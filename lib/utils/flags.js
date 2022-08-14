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
		desc: `Filter latest articles`
	},
	featured: {
		type: `boolean`,
		default: false,
		alias: `f`,
		desc: `Filter featured articles`
	},
	user: {
		type: `boolean`,
		default: false,
		alias: `u`,
		desc: `Filter articles by user`
	},
	trending: {
		type: `boolean`,
		default: false,
		alias: `t`,
		desc: `Filter trending articles, blogs and tags`
	},
	community: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Filter trending articles, blogs and tags`
	}
};
