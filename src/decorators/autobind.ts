//autobind decarator
export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		get() {
			const boudnFn = originalMethod.bind(this);
			return boudnFn;
		},
	};
	return adjDescriptor;
}
