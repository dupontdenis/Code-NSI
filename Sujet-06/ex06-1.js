// La fonction `recherche` prend en paramètres deux chaines de caractères `gene` et
// `seq_adn` et renvoie `True` si on retrouve `gene` dans `seq_adn` et `False` sinon.

// def recherche(gene, seq_adn):
//     n = len(seq_adn)
//     g = len(gene)
//     i = 0
//     trouve = False
//     while i < n-g+1 and trouve == False :
//         j = 0
//         while j < g and gene[j] == seq_adn[i+j]:
//             j += 1
//         if j == g:
//             trouve = True
//         i += 1
//     return trouve

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
