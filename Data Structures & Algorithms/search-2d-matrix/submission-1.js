class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;

        let left = 0;
        let right = m * n - 1;   

        while(left <= right) {
            const midIndex = Math.floor((left + right) / 2);

            const row = Math.floor(midIndex / n);
            const col = midIndex % n;
            const value = matrix[row][col];

            if(target === value) {
                return true;
            } else if (target > value) {
                left = midIndex + 1;
            } else {
                right = midIndex - 1;
            }
        }

        return false;
    }
}
