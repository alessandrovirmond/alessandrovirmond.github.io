let texto = document.getElementById("texto");
let paragrafo = document.getElementById("resultado");

texto.addEventListener("keyup", function(){
    paragrafo.innerHTML = texto.value;
});