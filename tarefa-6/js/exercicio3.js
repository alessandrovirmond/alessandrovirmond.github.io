function soma(){
    let r = 0

    for(let i = 2; i <= 1000; i = i + 2){
        r = r + i;
    }
    return r;
}

console.log(soma());