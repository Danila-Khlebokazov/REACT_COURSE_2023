/**
 * @return {Function}
 */
 var createHelloWorld = function() {
    // return function(...args) {
    //     return "Hello World"
    // }
    // return (...args)=>{
    //     return "Hello World"
    // }
    return () => "Hello World";
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */