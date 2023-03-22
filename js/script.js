/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri 
che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali 
dei numeri da indovinare sono stati individuati.
*/

/*
mostro la pagina con il titolo e il btn start,
al click genero i numeri casuali e li mostro a schermo,
creo il countdown e lo faccio partire,
quando arriva a 0 nascondo i numeri casuali, 
mostro l'istruzione successiva e la text area per la risposta



*/

//funzione che genera i numeri
function numbersGenerator(){
    const rdnNumbers=[]; 
    while (rdnNumbers.length < 5){
        const numberRdn = getRndNumIncl(1, 50);
        if(!rdnNumbers.includes(numberRdn)){
            rdnNumbers.push(numberRdn);
        };
    };
    return rdnNumbers;
};