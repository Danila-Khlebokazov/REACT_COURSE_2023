/**
 * @param {string} val
 * @return {Object}
 */
 let expect = function(val) {
    function toBe(val2){
        if(val === val2){
            return true
        }
        else{
            throw "Not Equal"
        }
    }
    function notToBe(val2){
        if(val !== val2){
            return true
        }
        else{
            throw "Equal"
        }
    }
    return {
        toBe: toBe,
        notToBe: notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
