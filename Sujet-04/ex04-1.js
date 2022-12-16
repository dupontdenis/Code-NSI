const recherche = (data) => {
    const result = [];
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i + 1] == data[i] + 1) {
            result.push([data[i], data[i + 1]])
        }
    }
    return result;
}

console.log(recherche([5, 1, 2, 3, 8, -5, -4, 7]))

//
const recherche2 = (data) => {
    const result = [];
    data.forEach((element, i) => {
        if (data[i + 1] == element + 1) {
            result.push([element, data[i + 1]])
        }
    });
    return result;
}

console.log(recherche2([5, 1, 2, 3, 8, -5, -4, 7]))