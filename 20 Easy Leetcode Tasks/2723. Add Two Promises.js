/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
 var addTwoPromises = async function(promise1, promise2) {
    let num1, num2;
    await promise1.then(function(num){
        num1=num;
    });
    await promise2.then(function(num){
        num2=num;
    });
    return num1 + num2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */