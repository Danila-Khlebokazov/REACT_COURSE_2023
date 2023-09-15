/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
 var chunk = function(arr, size) {
    let newA = []
    for(let i = 0; i < Math.ceil(arr.length/size); i++){
        newA.push(arr.slice(i*size, size+i*size))
    }
    return newA
};
