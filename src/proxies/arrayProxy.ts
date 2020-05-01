export default function arrayProxy(
	array: Array<any>,
	itemProxy: (target: any) => any
): Array<any> {
	const proxy: Array<any> = new Proxy(array, {
		get(target: Array<any>, name: any) {
			if (typeof target[name] === "function") return target[name].bind(proxy);
			if (name === "length") return target.length;

			return target[name] && itemProxy(target[name]);
		},
	});

	return proxy;
}
