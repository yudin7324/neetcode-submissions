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
                map[sorted] = [];
            } 

            map[sorted].push(word);
        }

        return Object.values(map);
    }
}
