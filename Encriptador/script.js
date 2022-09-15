const resultext = document.querySelector(".salida");
const text = document.querySelector(".text");
const cryptbt = document.getElementById("uno");
const decryptbt = document.getElementById("dos");
const articleImg = document.querySelector(".desaparecer");
const copy = document.getElementById("tres");
const zonatexto = document.querySelector(".zonaTxt");

zonatexto.style.display = 'none';

function btnEncriptar() {
	articleImg.style.display = 'none';
	zonatexto.style.display = 'block';
	resultext.value = encriptar(text.value);
	text.value = "";

}

function encriptar(txt){
	let code = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	txt = txt.toLowerCase();
	for(let i = 0; i < code.length; i++){
		if(txt.includes(code[i][0])){
			txt = txt.replaceAll(code[i][0],code[i][1]);
		}
	}
	return txt;
}

function btnDesencriptar() {
	articleImg.style.display = 'none';
	resultext.style.display = 'block';
	resultext.value = desencriptar(text.value);
	text.value = "";

}

function desencriptar(txt){
	let code = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	txt = txt.toLowerCase();
	for(let i = 0; i < code.length; i++){
		if(txt.includes(code[i][1])){
			txt = txt.replaceAll(code[i][1],code[i][0]);
		}
	}
	return txt;
}

function btnCopiar() {
    resultext.select();
    navigator.clipboard.writeText(resultext.value)
    resultext.value = "";
}
