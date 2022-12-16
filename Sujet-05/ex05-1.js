// Écrire une fonction rechercheMinMax qui prend en paramètre un tableau de nombres non triés tab, et qui renvoie la plus petite et la plus grande valeur du tableau sous la forme d’un dictionnaire à deux clés ‘min’ et ‘max’.

const rechercheMinMax = function (array) {
    let min = null, max = null;
    for (const value of array) {

        if (value > max) {
            max = value;
        }
        if (value < min) {
            min = value;
        }


    }
    return { min, max }
}

const tableau = [0, 1, 4, 2, -2, 9, 3, 1, 7, 1]
const resultat = rechercheMinMax(tableau)
console.log(`${JSON.stringify(resultat)}`)

const { min, max } = rechercheMinMax(tableau)
console.log(`la valeur max est ${max}, la valeur min est ${min}`)

// reduce
const { min: m, max: M } = tableau.reduce(({ min, max }, val) => {
    let M = Math.max(max, val);
    let m = Math.min(min, val);
    return { max: M, min: m }
}, { min: null, max: null })
console.log(`la valeur max est ${M}, la valeur min est ${m}`)
