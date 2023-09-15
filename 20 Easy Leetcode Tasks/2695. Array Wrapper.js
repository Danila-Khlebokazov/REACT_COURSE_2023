/**
 * @param {number[]} nums
 */
 var ArrayWrapper = function(nums) {
    console.log("init")
    this.arr = nums;
    return [nums]
};

ArrayWrapper.prototype.valueOf = function() {
    console.log("value")
    let res = 0;
    for(let i = 0; i < this.arr.length; i++){
        res += this.arr[i];
    };
    return res;
}

ArrayWrapper.prototype.toString = function() {
    console.log("string")
    let res = "";
    for(let i = 0; i < this.arr.length; i++){
        res += this.arr[i];
        if(i !== this.arr.length-1){
            res += ",";
        };
    };
    res = "[" + res + "]";
    return res;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */