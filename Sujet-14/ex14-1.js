
const correspond = (mot, mot_a_trous) => {

    let eq = true;
    let index = 0;

    while (eq && index < mot_a_trous.length) {
        const char = mot_a_trous[index];
        if (char == "*" || char == mot[index]) {
            index++
        } else {
            eq = false;
        }
    }

    return eq
}




console.log(correspond('INFORMATIQUE', 'INFO*MA*IQUE'))
console.log(correspond('AUTOMATIQUE', 'INFO*MA*IQUE'))

const correspond2 = (mot, mot_a_trous) => {

    if (mot.length != mot_a_trous.length) {
        return false
    }
    for (let index = 0; index < mot.length; index++) {
        if (mot[index] != mot_a_trous[index] && mot_a_trous[index] != '*') {
            return false
        }
        return true;
    }
}

console.log(correspond2('AU', '**'))