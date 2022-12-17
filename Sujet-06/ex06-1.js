const maxi = function(array){
    let max = array[0];
    let indexMax = 0;
    for (let index = 0; index < array.length; index++) {
        if ( array[index] > max ) {
            max= array[index];
            indexMax = index;
        }      
    }
    return [max,indexMax]
}

console.table(maxi([1,5,6,9,1,2,3,7,9,8]))

const [max,i] = maxi([1,5,6,9,1,2,3,7,9,8])
console.log(`la valeur max est ${max} à l'index ${i}`)


