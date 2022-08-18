// File/component containing different flags used in the CLI.

export const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console before output`
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
	community: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Filter community articles from Hashnode (from personalized feed)`
	},
	latest: {
		type: `boolean`,
		default: false,
		alias: `l`,
		desc: `Filter latest articles from Hashnode`
	},
	featured: {
		type: `boolean`,
		default: false,
		alias: `f`,
		desc: `Filter featured articles from Hashnode`
	},
	user: {
		type: `boolean`,
		default: false,
		alias: `u`,
		desc: `Filter articles from a specific Hashnode user`
	},
	trending: {
		type: `boolean`,
		default: false,
		alias: `t`,
		desc: `Filter trending articles from Hashnode`
	}
};
