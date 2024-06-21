// Array Exercise No. 2
// Find the largest number in an Array

// Solution Code:
const nums = [13, 9, 15, 10, 15, 80];
let largestNum = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestNum) {
        largestNum = nums[i];
    }
}
console.log("largestNum", largestNum);