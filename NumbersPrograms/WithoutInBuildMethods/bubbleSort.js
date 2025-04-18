const bubbleShot = (arr) => {
    let nums = arr;
    let n = arr.length
    let temp;

    for (let x = 0; x < n - 1; x++)
        for (let y = 0; y < ((n - 1) - x); y++) {
            console.log(nums[x], nums[y])
        }
} 
bubbleShot([9,8,6,3,51])