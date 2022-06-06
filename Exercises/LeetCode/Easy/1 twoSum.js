/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    let pastNumbers = {};
    for (var index1 = 0; index1 < nums.length; index1++) {
        const neededValue = target - nums[index1];
        const index2 = pastNumbers[neededValue];
        if (index2 != null) {
            return [index2, index1];
        }
        else {
            pastNumbers[nums[index1]] = index1;
        }

    }
    
};

console.log(twoSum([2, 7, 11, 15], 9));