
const bubbleSort = (arr) => {
    let nums = arr;
    let temp;
    for (let b = 0; b < nums.length -1 ; b++) {
        for (let a = 0; a < nums.length -1 -b; a++) {
            if (nums[a] > nums[a + 1]) {
                temp = nums[a + 1];
                nums[a + 1] = nums[a]
                nums[a] = temp
            }
        }
    }
    console.table(nums)
}
bubbleSort([1, 95, 2, 9, 3, 54, 23, 61, 12, 0])