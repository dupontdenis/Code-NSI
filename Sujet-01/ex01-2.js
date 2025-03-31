// for of
const Pieces = [100, 50, 20, 10, 5, 2, 1];
function rendreLaMonnaie(rendre) {
// Tableau des valeurs disponibles
    const resultat = []; // Tableau pour stocker les quantités de chaque valeur


    for (const valeur of Pieces) { // Parcours de chaque valeur
        const n = Math.floor(rendre / valeur); // Nombre maximal pour cette valeur
        rendre = rendre%valeur; // Mettre à jour le montant restant
        resultat.push(n); // Ajouter au tableau des résultats
    }


    return resultat; // Retourne le tableau des quantités
}

//while
const Pieces = [200, 100, 50, 20, 10, 5, 2, 1]; // Tableau des valeurs disponibles
function calculerQuantite(somme, valeur) {
  return {
    quantite: Math.floor(somme / valeur),
    reste: somme % valeur,
  };
}

function rendreLaMonnaieWhile(somme) {
  const resultat = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 }; // Initialisation de l'objet résultat
  let i = 0; // Initialisation de l'index du tableau des valeurs

  while (i < Pieces.length && somme > 0) {
    // Tant qu'il reste des valeurs à traiter

    let { quantite, reste } = calculerQuantite(somme, Pieces[i]); // Calcul des quantités et reste
    if (quantite) resultat[Pieces[i]] = quantite; // Mise à jour de l'objet résultat avec la quantité
    somme = reste; // Mise à jour explicite de somme
    i++; // Incrémentation de l'index pour passer à la valeur suivante
  }

  return resultat; // Retourne l'objet des résultats
}

// Exemple d'utilisation
const somme = 230;
console.log(rendreLaMonnaieWhile(somme));



// Exemple d'utilisation
const somme = 37;
console.log(rendreLaMonnaie(somme));

// recursif
const Pieces = [100, 50, 20, 10, 5, 2, 1];
const rendu_glouton = function (aRendre, solution = [], i = 0) {

    if (aRendre == 0) {
        return solution;
    }
    const p = Pieces[i];
    if (p <= aRendre) {
        solution.push(p)
        return rendu_glouton(aRendre - p, solution, i)
    }
    else {
        return rendu_glouton(aRendre, solution, ++i)
    }
}
console.log(rendu_glouton(68, [], 0));

//reduce
const rendu = Pieces.reduce( (acc, piece) => {
   const nbPiece = Math.floor(acc.aRendre/piece);
   if (nbPiece==0) {
    return acc
   }
   acc.aRendre = acc.aRendre%piece;
   acc[piece] = nbPiece;
   return acc;
}, {aRendre:151})
 
const r = Object.assign( {100:0,50:0,20:0,10:0,5:0,2:0,1:0}, delete rendu.aRendre)
console.log(JSON.stringify(r))


