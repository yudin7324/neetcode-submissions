class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const word of strs) {
            const sortedWord = [...word].sort().join("");

            if(!map.has(sortedWord)) {
                map.set(sortedWord, [])
            } 

            map.set(sortedWord, [...map.get(sortedWord), word])
        }

        return [...map.values()];
    }
}
