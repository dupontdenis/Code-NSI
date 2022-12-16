// On s’intéresse à un algorithme récursif qui permet de rendre la monnaie à partir d’une
// liste donnée de valeurs de pièces et de billets.

// Le système monétaire est donné sous
// forme d’une liste `pieces=[100, 50, 20, 10, 5, 2, 1]`.
// (on supposera qu’il n’y a
// pas de limitation quant à leur nombre).

// On cherche à donner la liste de pièces à rendre
// pour une somme donnée en argument.
// Compléter le code Python ci-dessous de la fonction `rendu_glouton` qui implémente cet
// algorithme et renvoie la liste des pièces à rendre.
// >>>rendu_glouton(68,[],0)
// [50, 10, 5, 2, 1]
// >>>rendu_glouton(291,[],0)
// [100, 100, 50, 20, 20, 1

const Pieces = [100, 50, 20, 10, 5, 2, 1];
const rendu_glouton = function (arendre, solution = [], i = 0) {

    if (arendre == 0) {
        return solution;
    }
    const p = Pieces[i];
    if (p <= arendre) {
        solution.push(p)
        return rendu_glouton(arendre - p, solution, i)
    }
    else {
        return rendu_glouton(arendre, solution, ++i)
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