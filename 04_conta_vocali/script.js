/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numeroVocali(word) {
    const vocali = ['a', 'e', 'i', 'o', 'u']
    let count = 0;

    // creo ciclo per trovare le vocali
    for (let letter of word.toLowerCase()) {
        if (vocali.includes(letter)) {
            count++;
        }
    }
    return count;
}


// Invoca la funzione qui e stampa il risultato in console
const numero = numeroVocali(word);
console.log(`numero vocali in "${word}": ${numero}`);




//Risultato atteso se si passa 'javascript': 3 (a, a, i)