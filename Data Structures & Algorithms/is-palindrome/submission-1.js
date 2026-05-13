class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const filteredString = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

        console.log(filteredString);

        return filteredString === [...filteredString].reverse().join("");
    }
}
