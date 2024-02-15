const pieces = [5, 2, 1];

const rendu = (aRendre = 0) => {

  // const retour = Array.from({ length: pieces.length }, v => 0);

  const retour = [];

  let reste = aRendre;

  pieces.forEach((piece, i) => {
    retour.push(Math.ceil(reste / piece));
    reste = reste % piece;
  });
  return retour;
}

console.log(rendu(20))
 

// 
const rendu = pieces.reduce( (acc, piece) => {
   const nbPiece = Math.floor(acc.aRendre/piece);
   if (nbPiece==0) {
    return acc
   }
   acc.aRendre = acc.aRendre%piece;
   acc[piece] = nbPiece;
   return acc;
}, {aRendre:151})
 
delete rendu.aRendre
const r = Object.assign( {100:0,50:0,20:0,10:0,5:0,2:0,1:0}, rendu)
