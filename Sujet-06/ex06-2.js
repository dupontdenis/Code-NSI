const recherche = function (gene, seq_adn){
    const n = seq_adn.length;
    const g = gene.length;
    let trouve = false;
    let i = 0;

    while (i < n-g+1 && trouve == false){
        let j = 0;
        while (j < g && gene[j] == seq_adn[i+j]){
            j += 1;
        }
        if (j == g ){
                trouve = true
        }
        i += 1
    }
    return trouve
}


console.log(recherche("AATC", "GTACAAATCTTGCC"));
console.log(recherche("AGTC", "AAGTCGCC"))
