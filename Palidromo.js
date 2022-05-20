//Primeira solução

function verificaPalidromo(string) {
	if(!string) return "string inexistente";

	return string.split("").reverse().join("") === string ? "Sim" : "Não" 





}

console.log(verificaPalidromo("ovo"))


//Segunda Solução

function verificaPalidromo2(string) {
	if (!string) return "string inexistente";

	for(let i = 0; i < string.legth / 2; i++) {

		if(string[i] !== string[string.legth -1 - i]) {

 
		return false;
		}
	}
	return true;
}



console.log(verificaPalidromo2("ovo"))