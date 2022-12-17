const Pieces = [100,50,20,10,5,2,1];
const rendu_glouton = function (arendre, solution=[], i=0) {
   
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
console.log(rendu_glouton(68,[],0));
 

// 
const rendu = Pieces.reduce( (acc, piece) => {
   const nbPiece = Math.floor(acc.aRendre/piece);
   if (nbPiece==0) {
    return acc
   }
   acc.aRendre = acc.aRendre%piece;
   acc[piece] = nbPiece;
   return acc;
}, {aRendre:151})
 
delete rendu.aRendre
const r = Object.assign( {100:0,50:0,20:0,10:0,5:0,2:0,1:0}, rendu.aRendre)