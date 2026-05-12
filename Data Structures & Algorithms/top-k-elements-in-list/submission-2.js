class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for(let i = 0; i < nums.length; i++) {
            const value = nums[i];

            if(!map[value]) {
                map[value] = 0;
            }

            map[value] = map[value] + 1;
        }

        return Object.keys(map).sort((a, b) => map[b] - map[a]).slice(0, k);
    }
}
