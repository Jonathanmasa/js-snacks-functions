/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function takeInitials(names) {
    return names.map(names => names[0]);
}


// Invoca la funzione qui e stampa il risultato in console
const initials = takeInitials(names);
console.log(initials);




//Risultato atteso: ["A", "L", "M", "A", "G", "A"]