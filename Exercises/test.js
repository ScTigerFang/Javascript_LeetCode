/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
    //needs to be in order of red = 0 white = 1 and blue = 2
    let maxIndex = nums.length - 1;// keeps track of right pointer
    let zeroPointer = 0; // Keeps track of leftPointer
    for (let i = 0; i <= maxIndex; i++) {
        if (nums[i] == 0) {
            [nums[i], nums[zeroPointer]] = [nums[zeroPointer], nums[i]];// swaps nums[i] with nums[zeroPointer]
            zeroPointer++; // Add 1 to pointer so it moves left
        }
        // 1/white will just be untouched
        if (nums[i] == 2) {
            [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];// swaps nums[i] with nums[maxIndex]
            i--;// this way it can go back can check with the value it swapped with?
            maxIndex--;// moves 2 pointer right
        }
    }
    return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));