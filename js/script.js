//Raccolta dati

//Chidere all' utente tramite PROMT:

// - kilometri da Percorrere
// - età del passeggero

//Esecuzione Logica:

// - calcolare prima il prezzo totale senza sconti
// - creare variabile prezzo finale
// - calcolare lo sconto con 2 if nidificati
// -> IF (età < 18 anni){
// applicare sconto del 20%}
// ELSE IF (età > 65 anni){ 
// non applicare nessuno sconto  
// }
// ELSE {
// applicare socnto del 40%}


//Output
// - stampa prezzo finale

// Raccolta Dati

let ageString = prompt("Inserire Età del passeggero")
let ageNum = parseInt(ageString)
console.log(ageNum) //accertamento che sia un numero
console.log(`${ageNum} anni`);

let kmString = prompt("Inserire Kilometri")
console.log(`${kmString} km di distanza`);


//Esecuzione Logica

let totalCost = kmString * 0.21
console.log(`Il prezzo pieno del biglietto è di ${totalCost} euro`)

let discount

if (ageNum <= 18){
    discount = totalCost * 0.2
} else if (ageNum >= 65){
    discount = totalCost * 0.4
} else {
    discount = 0
}

totalCost = totalCost - discount


//output

if (ageNum <= 18){
    console.log(`Avendo ${ageNum} anni lo sconto è di ${discount} euro`)
    console.log(`Il prezzo del biglietto scontato è di ${totalCost} euro`)
} else if (ageNum >= 65){
    console.log(`Avendo ${ageNum} anni lo sconto è di ${discount} euro`)
    console.log(`Il prezzo del biglietto scontato è di ${totalCost} euro`)
} else {
    console.log(`Non hai diritto a sconto e il tuo biglietto costerà ${totalCost} euro`)
}