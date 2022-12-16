
const calcul = (n)=> {

    const tab = [n];

    while (n != 1){

        // pair
        if ( n%2 == 0 ) {
            n = n / 2;
            
        } else {//impair
            n = 3*n +1;
    
        }
        tab.push(n)
    }

    return tab;
}

console.log(calcul(7))
