function fib(num){

        if(num <= 2){
            return 1;
        }
        return fib(num -1) + fib(num - 2);

}



var vet = [];

for( let i = 1; i <= 100; i++){
    console.log(fib(i));
}


fib(vet);

