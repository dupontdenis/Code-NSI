const recherche = (elt,tab) => {
    
    let index = -1
    for (let i=0; i<tab.length; i++){
        if (tab[i] == elt){
            index = i;
            break;
        }

    }
    return index;
}

console.log(recherche(9, [8, 9, 10, 15]))

