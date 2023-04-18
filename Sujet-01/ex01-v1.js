// 
const rendu = (arendre, i = 0) => {

  const sol = [];

  if (arendre == 0) {
    return sol;
  }
  const p = pieces[i];

  if (p <= arendre) {
    sol.push(p);
    return sol.concat(...rendu(arendre - p, i));
  }
  else {
    return sol.concat(...rendu(arendre, ++i));
  }
}

const aRendre = 183;
console.log(`${aRendre}$ : ${rendu(aRendre)}`)



// version avec destructuration pour la concaténation
const pieces = [100, 50, 20, 10, 5, 2, 1];
const rendu = (arendre, i = 0) => {

  let sol = [];

  if (arendre == 0) {
    return sol;
  }
  const p = pieces[i];

  if (p <= arendre) {
    sol.push(p);
    // concat du tableau courant avec les suivants
    return [...sol, ...rendu(arendre - p, i)];
  }
  else {
    return [...sol, ...rendu(arendre, ++i)];
  }
}

const aRendre = 181;
console.log(`${aRendre}$ : ${rendu(aRendre)}`)
