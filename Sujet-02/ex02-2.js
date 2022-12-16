// On cherche à déterminer les valeurs du triangle de Pascal. Dans ce tableau de forme
// triangulaire, chaque ligne commence et se termine par le nombre 1. Par ailleurs, la valeur
// qui occupe une case située à l’intérieur du tableau s’obtient en ajoutant les valeurs des
// deux cases situées juste au-dessus.

const pascal = (n) => {
    const tab = [];

    for (let i = 0; i <= n; i++) {
        tab[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                tab[i].push(1)
            } else {
                let v = tab[i - 1][j] + tab[i - 1][j - 1];
                tab[i].push(v)

            }
        }

    }

    return tab;
}



const p = pascal(4)
console.table(p);


//
const pascal2 = (n)=>{
    const C = [[1]]
    for (let k = 1; k < n+1; k++){
      const Ck = [1];
      for (let i = 1; i < k; i++){
         Ck.push(C[k-1][i-1]+C[k-1][i] )
      }
      Ck.push(1)
      C.push(Ck)
    }
    
    return C
  }
  
  const t = pascal2(4);