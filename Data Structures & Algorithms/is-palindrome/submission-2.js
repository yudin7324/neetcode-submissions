class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const filtered = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

        let left = 0;
        let right = filtered.length - 1;

        while(left < right) {
            if(filtered[left] !== filtered[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
