export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ba69f911.js","app":"_app/immutable/entry/app.e380ad2a.js","imports":["_app/immutable/entry/start.ba69f911.js","_app/immutable/chunks/scheduler.5e0162ec.js","_app/immutable/chunks/singletons.0a6f8093.js","_app/immutable/chunks/index.7a98e442.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.e380ad2a.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.5e0162ec.js","_app/immutable/chunks/index.2f4ef827.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
