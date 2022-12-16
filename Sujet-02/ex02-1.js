// Soit le couple [note,coefficient]:

// note est un nombre de type flottant [float] compris entre 0 et 20 ;
// coefficient est un nombre entier positif.
// Les résultats aux évaluations d'un élève sont regroupés dans une liste composée de couples [note,coefficient].

// Écrire une fonction moyenne qui renvoie la moyenne pondérée de cette liste donnée en paramètre.

// Par exemple, l’expression moyenne[[15,2],[9,1],[12,3]] devra renvoyer le résultat du calcul suivant :


const moyenne = function(tab){
    let somme_notes = 0
    let somme_coeffs = 0
    for (const devoir of tab) {
        const note = devoir[0];
        const coeff = devoir[1];
        somme_notes += note * coeff
        somme_coeffs += coeff
    }
    return somme_notes / somme_coeffs
}

console.log(moyenne([[15,2],[9,1],[12,3]]));

// destructure
const moy2 = function(tab){
    let somme_notes = 0
    let somme_coeffs = 0
    for (const [note,coeff] of tab) {
        somme_notes += note * coeff
        somme_coeffs += coeff
    }
    return somme_notes / somme_coeffs
}

// reduce
const moy3 = function(tab){
    const [somme_notes, somme_coeffs] = tab.reduce( ( [somme_notes,somme_coeffs], [note, coeff])=>
     [somme_notes + note * coeff, somme_coeffs + coeff], [0,0])
    return somme_notes / somme_coeffs
}

console.log(moy3([[15,2],[9,1],[12,3]]));