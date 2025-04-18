const selectionShot = (arr) => {
    let n = arr.length ;
    let array = arr;
    for (let x = 0; x < n - 1; x++) {
        let min = x;
        let temp;
        for (let y = x + 1; y < n; y++) {
            if(array[min] > array[y]){
                min = y;
            }            
        }
        temp = array[x];
        array[x] = array[min]
        array[min] = temp
    }
    console.log(array)
}

selectionShot([9,5,2,1,6])