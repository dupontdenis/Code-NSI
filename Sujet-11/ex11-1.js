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