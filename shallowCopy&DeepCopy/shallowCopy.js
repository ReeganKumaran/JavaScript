function ex1() {
    let arr1 = [1, 2, 3, 4, 5]
    let arr2 = arr1;
    arr1[0] = 100;
    console.log(arr1)
    console.log(arr2)
}
// ex1()
function ex2 () {
    let arr1 = [1,2,3,[4,5]]
    let arr2 = arr1;
    arr1[3][1] = 100
    console.log(arr1)
    console.log(arr2)
}
// Shallow Copy Example
function shallowCopyExample() {
    let arr1 = [1, 2, 3, [4, 5]];
    let arr2 = [...arr1]; // Shallow copy using spread operator

    arr1[0] = 100; // Change in the first element
    arr1[3][1] = 200; // Change in the nested array

    console.log("Original Array:", arr1); // [100, 2, 3, [4, 200]]
    console.log("Shallow Copy:", arr2);  // [1, 2, 3, [4, 200]]
}

shallowCopyExample();

// Deep Copy Example
function deepCopyExample() {
    let arr1 = [1, 2, 3, [4, 5]];
    let arr2 = JSON.parse(JSON.stringify(arr1)); // Deep copy using JSON methods

    arr1[0] = 100; // Change in the first element
    arr1[3][1] = 200; // Change in the nested array

    console.log("Original Array:", arr1); // [100, 2, 3, [4, 200]]
    console.log("Deep Copy:", arr2);      // [1, 2, 3, [4, 5]]
}

deepCopyExample();