import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["eaf_logo.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BbDFgMmg.js","app":"_app/immutable/entry/app.jYuQhx8-.js","imports":["_app/immutable/entry/start.BbDFgMmg.js","_app/immutable/chunks/entry.CEQQ6Oqb.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/entry/app.jYuQhx8-.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.KrH0w7im.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/medium/[medium]",
				pattern: /^\/medium\/([^/]+?)\/?$/,
				params: [{"name":"medium","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
