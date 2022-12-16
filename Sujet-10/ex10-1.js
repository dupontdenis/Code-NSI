const occurrence_lettres = ( words ) => {

    const occ = {};
    for (let i=0; i<words.length; i++){
        if(!occ[words[i]]) {
            occ[words[i]]=0;
        }
        occ[words[i]]++
    }
    return occ;
}


console.log(occurrence_lettres("Lell" ))


// const occurrence_lettres = ( words ) => {

//     const occ = {};
//     for (let i=0; i<words.length; i++){
//         !occ[words[i]]? occ[words[i]]=1 : occ[words[i]]++
//     }
//     return occ;
// }


// console.log(occurrence_lettres("Lell" ))


// //
// const occurrence_lettres2 = ( words ) => {

//     const letters = words.split("")
//     console.log(letters)
//     const occ = letters.reduce((a, lettre) => {
//            !a[lettre]? a[lettre]=1 : a[lettre]++
//         return a; }, {});


//     return occ;
// }


console.log(occurrence_lettres2("Hello world !" ))