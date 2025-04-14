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

let ageString = prompt("Inserire Età del passeggero");
// let ageString = parseInt(ageString);
if (ageString > 110 || ageString < 0 || isNaN(ageString)) {
    console.log(`Età sbagliata, hai scritto ${ageString}`)

} else {
    console.log(ageString) //accertamento che sia un numero
    console.log(`${ageString} anni`);



let kmString = prompt("Inserire Kilometri")
console.log(`${kmString} km di distanza`);


//Esecuzione Logica

let totalCost = kmString * 0.21
console.log(`Il prezzo pieno del biglietto è di ${totalCost} euro`)

let discount

if (ageString <= 18){
    discount = totalCost * 0.2
} else if (ageString >= 65){
    discount = totalCost * 0.4
} else {
    discount = 0
}

let totalDiscountCost = totalCost - discount


//output

if (ageString <= 18){
    console.log(`Avendo ${ageString} anni lo sconto è di ${discount.toFixed(2)} euro`)
    
} else if (ageString >= 65){
    console.log(`Avendo ${ageString} anni lo sconto è di ${discount.toFixed(2)} euro`)
    
} else {
    console.log(`Non hai diritto a nessuno sconto`)
}


console.log(`Il prezzo del biglietto scontato è di ${totalDiscountCost.toFixed(2)} euro`)

}
