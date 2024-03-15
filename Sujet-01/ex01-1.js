// Écrire une fonction `recherche` qui prend en paramètres `caractere`, un caractère, et
// `mot`, une chaîne de caractères, et qui renvoie le nombre d’occurrences de `caractere`
// dans `mot`, c’est-à-dire le nombre de fois où `caractere` apparaît dans `mot`.

// Exemples :
// ```js
// >>> recherche('e', "sciences")
// 2
// >>> recherche('i',"mississippi")
// 4
// >>> recherche('a',"mississippi")
// 0
// ```

const texte = "mississippi";
console.log(texte.length, texte[0]);

const recherche = function (char, mot) {
    let nb = 0;
    for (let i = 0; i< mot.length; i++) {
        if (mot[i] == char) {
            nb = nb + 1;
        }
    }
    return nb;
}

console.log(recherche('i',"mississippi"));

// for of 
const recherche1 = function (char, mot) {
    let nb = 0;
    for (const c of mot) {
        if (c == char) {
            nb++;
        }
    }
    return nb;
}

console.log(recherche1('i',"mississippi"));

//astuce
const rechercheX = function (char, mot) {
    return mot.split(char).length - 1;
}
console.log(rechercheX('i',"iii"));

// methode filtre
const recherche2 = function (char, mot) {
    return mot.split("").filter( c => c == char ).length;
}

//reduce
function recherche3(str, char) {
    return str.split('').reduce((a, x) => x === char ? ++a : a, 0);
}
console.log(recherche3('p','mississippi'));

