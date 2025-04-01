const recherche = (array, val) => {
    let i=-1;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === val) {
            i = index;
            break;
        }
    }
    return i;
}

console.log(recherche([2, 3, 4, 5, 6], 5))

// 
const recherche2 = (array, val) => {
    return array.indexOf(val);
}
console.log(recherche2([2, 3, 4, 5, 6], -2))

//dicotomie
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Usage examples
console.log(binarySearch([2, 3, 4, 5, 6], 5)); // 3
console.log(binarySearch([2, 3, 4, 6, 7], 5)); // -1
