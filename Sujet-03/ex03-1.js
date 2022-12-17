
const delta = (array)=>{
    const tab = [array[0]];

    for (let index = 1; index < array.length; index++) {
        tab[index] = array[index] - array[index-1];
    }
    return tab;
}

console.log(delta([1000, 800, 802, 1000, 1003]))
// [1000, -200, 2, 198, 3]
console.log( delta([42]) )


// 

const delta2 = (array)=>{
    return array.map( (elt,i,tab)=>{
        if (i == 0){
            return elt;
        } else {
            return elt-tab[i-1];
        }
    })
}

console.log(delta2([1000, 800, 802, 1000, 1003]))
// [1000, -200, 2, 198, 3]
console.log( delta2([42]) )