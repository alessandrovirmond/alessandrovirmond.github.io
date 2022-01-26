
function fatorial (num){
    let r = 1;

    for(let i = 2; i <= num; i++){
        r = r * i;
    }

    return r;
}

f = fatorial(12);

console.log(f);