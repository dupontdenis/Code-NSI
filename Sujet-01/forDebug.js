const Pieces = [100, 50, 20, 10, 5, 2, 1];
const rendu_glouton = function (aRendre, solution = [], i = 0, prefix) {
  console.log(`${prefix}> rendu_glouton(${aRendre}, [${solution}], ${i}: ${Pieces[i]}€ ) `)
  if (aRendre == 0) {
    console.log(`FIN de rendu_glouton(${aRendre}, [${solution}], ${i} ) `)
    return solution;
  }
  const p = Pieces[i];
  if (p <= aRendre) {
    solution.push(p)
    return rendu_glouton(aRendre - p, solution, i, `${prefix}-`)
  }
  else {
    return rendu_glouton(aRendre, solution, ++i, `${prefix}-`)
  }
}
rendu_glouton(68, [], 0, "");
