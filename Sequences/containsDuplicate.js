//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//Example: nums = [1,2,3,1], output: true

// for(let i = 0; i < nums.length; i++){
//     for(let j = 0; j < nums.length; j++){
//         if(i === j) return true;
//         else return false;
//     }
// }

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const hashTable = new Map();
    for(let i = 0; i < nums.length; i++){
        if(hashTable.has(nums[i])) return true;
        else hashTable.set(nums[i], true);
    }
    return false
};