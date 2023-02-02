/*
 L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
 Ogni cella ha un numero progressivo, da 1 a 100.
 Ci saranno quindi 10 caselle per ognuna delle 10 righe.
 Quando l'utente clicca su ogni cella, la cella cliccata si colora
 e si stampa un messaggio in console con il numero della cella cliccata.
*/

// AGGANCIO DEL BOTTONE TRAMITE id DAL HTML
const button = document.getElementById("generate");

// CREO L'EVENTO AL "CLICK" DEL BOTTONE
button.addEventListener(
    "click", 
    function () {
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
                  // ALTRIMENTI COLORA NORMALMENTE  
                } else {
                    this.classList.add("active");
                }
                // USO IL "this" PER AGGANCIARMI A OGNI SINGOLA CELLA
                //this.classList.toggle("active");   

                // QUANDO CLICCO SU UNO SQUARE STAMPALO IN CONSOLE
                 console.log("casella selezionata n°:" + i);
            });
            grid.append(square);
        }   
        const numberBomb = []
        while (numberBomb.length < 16) {
            randomNumber = Math.floor(Math.random() * 100) + 1;

            if (!numberBomb.includes(randomNumber)) {
                numberBomb.push(randomNumber);
            }
        }
        console.log(numberBomb);
    }

