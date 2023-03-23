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

function play() {

    //funzione che genera i numeri
    function numbersGenerator(){
        const numbers=[]; 
        while (numbers.length < 5){
            const numberRdn = getRndNumIncl(1, 50);
            if(!numbers.includes(numberRdn)){
                numbers.push(numberRdn);
            };
        };
        return numbers;
    };

    function controlNumbers() {

        let numInput = document.querySelectorAll('input');

        //array con i numeri dell'utente
        const userNumbers = [];

        //ciclo che inserisce i numeri dell'utente
        for(let i = 0; i < numInput.length; i++){
            if(!userNumbers.includes(numInput[i].value)){
                userNumbers.push(parseInt(numInput[i].value));
            };
        };
        console.log(userNumbers);
        return userNumbers;
    };

    function responceNumbers(){

        //numeri dell'utente
        let numUser = controlNumbers();
        console.log(numUser);
        
        //array numer indovinati
        const guessed = [];

        //controlla i numeri dell'utente e quelli random
        for (let i = 0; i < numUser.length; i++) {
            
            if(generatedNumbers.includes(numUser[i])){
                guessed.push(numUser[i]);
            }

        }

        console.log(guessed);
        document.querySelector('#result').innerHTML = `
        <p class="fs-4"> Questi sono i numeri che hai indovinato : ${guessed} <br> e hai totalizzato un punteggio di:${guessed.length}/5</p>
        `;

    };

    //console.log(generatedNumbers);
    //legge l'array generatedNumbers
    const generatedNumbers = numbersGenerator();

    //mostra generatedNumbers
    let display = document.createElement('div');
    display.innerText = `${generatedNumbers}`;
    display.classList.add('ad-color', 'fs-3');
    document.querySelector('#numbers').appendChild(display);

    let input = document.querySelector('#userAnswer');

    //countdown 10 sec che alla fine nasconde i numeri generati 
    setTimeout(() => {
        display.remove();
        input.classList.remove('d-none');
    }, 10000);

    //controllo dei numeri dell'utente
    const check = document.getElementById('validate');
    check.addEventListener('click', responceNumbers);

    
};

//load start btn for start game
const start = document.getElementById('start');
start.addEventListener('click', play);



