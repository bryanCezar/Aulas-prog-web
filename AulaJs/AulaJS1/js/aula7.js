function converterDolar(valor){
   let dolar = valor/5.16;
   return dolar;

}
function mostrarResultado(nomeProd,valor){
    const res= document.getElementById('resultado');
    res.textContent= (`O valor do produto é ${nomeProd} em reais é ${valor}convertido para dpçar é ${converterDolar(valor).toFixed(2)}`)
}
function pegarValor(){
    const nomeProd= document.getElementById("nome");
    const reais = document.getElementById('real');
    mostrarResultado(nomeProd.value, reais.value);
}

