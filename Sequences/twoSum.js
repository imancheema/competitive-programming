//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Example:
//Given nums = [2,7,11,15], target = 9,

//Because nums[0] + nums[1] == 9, we return [0, 1].

// for(let i = 0; i < nums.length; i++){
//     for(let j = 0; j < nums.length; j++){
//         if(i === j) continue;
//         if (nums[i] + nums[j] === target) return [i, j];
//     }
// }

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    const hashTable = new Map();
    for(let i = 0; i < nums.length; i++){
        let difference = target - nums[i];
        if(hashTable.has(difference)) {
            return [i, hashTable.get(difference)];
        }
        hashTable.set(nums[i], i); //return current number and its index
    }
};

