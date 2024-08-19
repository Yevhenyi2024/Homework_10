function memoize(fn, cacheLimit) {
    const cache = new Map();
    const keys = [];

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        if ([...cache.values()].includes(result)) {
            return result;
        }
        if (keys.length >= cacheLimit) {
            const oldestKey = keys.shift();
            cache.delete(oldestKey);
        }
        cache.set(key, result);
        keys.push(key);

        return result;
    };
}
function slowFunction(x, y) {
    return x + y;
}
const memoizedFunction = memoize(slowFunction, 3);
console.log(memoizedFunction(2, 3)); 
console.log(memoizedFunction(3, 4)); 
console.log(memoizedFunction(2, 3)); 
console.log(memoizedFunction(4, 5)); 
console.log(memoizedFunction(1, 1)); 
console.log(memoizedFunction(2, 3)); 
