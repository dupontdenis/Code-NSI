const conv_bin = (n) => {
    
    const tab = [];
    let bits = 0;

    if (n == 0) tab.push(0);
    
    while (n != 0) {
        bits++;
        tab.push(n % 2)
        n = Math.floor(n / 2);
    }
    return [tab.reverse(), bits]
}

console.table(conv_bin(0))