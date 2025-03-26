

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
