/*
 L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
 Ogni cella ha un numero progressivo, da 1 a 100.
 Ci saranno quindi 10 caselle per ognuna delle 10 righe.
 Quando l'utente clicca su ogni cella, la cella cliccata si colora
 e si stampa un messaggio in console con il numero della cella cliccata.
*/

// AGGANCIO DEL BOTTONE TRAMITE id DAL HTML
const button = document.getElementById("generate");

// DICHIARO UN CONTATORE PER RACCOGLIERE IL PUNTEGGIO
let score = 0;

// CREO L'EVENTO AL "CLICK" DEL BOTTONE
button.addEventListener(
    "click", 
    function () {

        // AGGANCIO AL DIV DEL HTML
        const grid = document.getElementById("grid")
        generateGrid(grid);
    }
)

// FUNZIONE PER GENERARE LE CASELLE
function generateGrid(grid) {

    // RESET DELLA GRIGLIA DOPO UN NUOVO "CLICK"
    grid.innerHTML = "";

    let i = 0;
    // CICLO PER CREARE LE 100 CASELLE DELLA GRIGLIA:
    for (let i = 1; i <= 100; i++) {
        const testo = i + 1;

        // CREO UN DIV CON NOME SQUARE PER LE CASELLE
        const square = document.createElement("div");
        
        // DO LA CLASSE "square" AL DIV
        square.classList.add("square");

        // SCRIVO I NUMERI DA 1 A 100 NEGLI SQUARES
        square.innerHTML = i;
        
        // CREO UN EVENTO SUL "CLICK" DI OGNI SQUARE
        square.addEventListener(
            "click",
            function () {

                // SE LA CASELLA CONTIENE UN "numberBomb" COLORA DI ROSSO
                if (numberBomb.includes(i)) {
                    square.classList.add("bomb");

                    // E STAMPO IL PUNTEGGIO FATTO DALL'UTENTE
                    console.log("GAME OVER! hai aftto " + score + " punti");
                  
                    // ALTRIMENTI COLORA NORMALMENTE E CONTA I PUNTI 
                } else {
                    this.classList.add("active"); score++;
                }  

                // QUANDO CLICCO SU UNO SQUARE STAMPALO IN CONSOLE
                console.log("casella selezionata n°:" + i);
            });
            grid.append(square);
        }   

        // ARRAY PER I NUMERI CASUALI CHE CONTERRANNO LE BOMBE
        const numberBomb = []

        // CICLO "while" PER GENERARE 16 NUMERI/BOMBE CASUALI
        while (numberBomb.length < 16) {
            randomNumber = Math.floor(Math.random() * 100) + 1;

            // SE 1 DEI NUMERI GENERATI E' GIA' PRESENTE 
            // SALTA IL CICLO E' CREANE 1 NUOVO
            if (!numberBomb.includes(randomNumber)) {
                numberBomb.push(randomNumber);
            }
        }
        // STAMPO IN CONSOLE IL NUMERO/BOMBA
        console.log(numberBomb);
    }

