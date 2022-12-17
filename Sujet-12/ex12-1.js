const moyenne = (array)=>{

    let somme =0;
    for (let index = 0; index < array.length; index++) {
        somme += array[index];
        
    }
    return somme/array.length;
}
console.log(moyenne([5,3,8]))

//