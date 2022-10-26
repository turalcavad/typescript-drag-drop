//autobind decarator
export function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boudnFn = originalMethod.bind(this);
            return boudnFn;
        },
    };
    return adjDescriptor;
}
//# sourceMappingURL=autobind.js.map