function memoize(fn) {
    const cache = new Map();
    return function (...args) {
      const key = args.toString();
      if (cache.has(key)) {

        console.log('From cache', cache.get(key));
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }
  
  const slowFunction = (num) => num * 2;
  const memoizedFunction = memoize(slowFunction);
  
  console.log(memoizedFunction(5));  // Output: 10
  console.log(memoizedFunction(5));  // Output: 10 (Cached result)




  function memoize(fn) {
    const cache = {};  // Cache stored in a closure
  
    return function (...args) {
      const key = JSON.stringify(args);  // Create a unique key for arguments
      if (cache[key]) {
        return cache[key];  // Return cached value
      }
  
      const result = fn(...args);  // Compute result
      cache[key] = result;  // Store in cache
      return result;
    };
  }
  
  const expensiveComputation = (num) => {
    // Simulate a costly operation
    for (let i = 0; i < 1e7; i++) {}
    return num * 2;
  };
  
  const memoizedComputation = memoize(expensiveComputation);
  
  console.log(memoizedComputation(5));  // Computes and caches result
  console.log(memoizedComputation(5));  // Returns cached result