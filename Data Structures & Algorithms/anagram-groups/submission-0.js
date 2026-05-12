class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}

        for(const word of strs) {
            const sorted = [...word].sort().join("");

            if(!map[sorted]) {
                map[sorted] = [word];
            } else {
                map[sorted] = [...map[sorted], word];
            }
        }

        return Object.values(map);
    }
}
