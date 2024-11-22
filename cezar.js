function criptografar(frase, chave){
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let resultado = "";

    //Transformar a chave em um deslocamento
    chave = chave.toUpperCase();
    const deslocamento = alfabeto.indexOf(chave);

    //Transformar toda a frase para letras minusculas 
    frase = frase.toUpperCase();

    //percorrer cada caractere da frase
    for(let i = 0; i < frase.length; i++){
        const char = frase[i];

        //verificar se o caractere esta no alfabeto
        if(alfabeto.includes(char)){
            const index = alfabeto.indexOf(char);
            const novoIndex = (index + deslocamento) % 26;
            resultado += alfabeto[novoIndex];
        }else{
            //caracteres que nao estao no alfabeto permanecem inalterados
            resultado += char;
        }
    }
    return resultado;
}
console.log(criptografar("bom dia, o joão é gay", "k"))