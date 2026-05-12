class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while(left <= right) {
            const midIndex = Math.floor((left + right) / 2);

            if(target > nums[midIndex]) {
                left = midIndex + 1;
            } else if (target < nums[midIndex]) {
                right = midIndex - 1;
            } else {
                return midIndex;
            }
        }

        return -1;
    }
}
