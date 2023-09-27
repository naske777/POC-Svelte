export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.04657319.js","app":"_app/immutable/entry/app.436fc408.js","imports":["_app/immutable/entry/start.04657319.js","_app/immutable/chunks/scheduler.5f3cdae5.js","_app/immutable/chunks/singletons.3a0fef99.js","_app/immutable/chunks/index.540aecd0.js","_app/immutable/entry/app.436fc408.js","_app/immutable/chunks/scheduler.5f3cdae5.js","_app/immutable/chunks/index.6d7d4f61.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
				id: "/classrom-teacher/[id]",
				pattern: /^\/classrom-teacher\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
