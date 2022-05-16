// // Chiedere la difficoltà
const difficulty = parseInt(prompt("Scegliere la difficoltà: 1=Difficile, 2=Intermedio, 3=Facile"));
console.log(difficulty);

const container = document.getElementById("container");

// Funzione per creare elementi e aggiungere classe square
const createMyElement = () => {
    const node = document.createElement("div");
    node.className = "square";
    return node;
}

// Funzione per generare numeri con un range
function getRandomNumMinMax (rangeMin, rangeMax){
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
    return result;
}

// Ciclo per generare quadrati, inserire numeri e aggiungere evento click
if (difficulty === 1) {
    for (i = 0; i < 100; i++){
        const divEl = createMyElement();
        container.append(divEl);
        divEl.append(getRandomNumMinMax(1, 100));

        divEl.addEventListener ("click",
            function click() {
                if (divEl.classList[1] === "backgroundlightblue") {
                    divEl.classList.remove("backgroundlightblue")
                } else {
                    divEl.classList.add("backgroundlightblue");
                }
            }
        )
    }
} else if (difficulty === 2) {
    for (i = 0; i < 81; i++){
        const divEl = createMyElement();
        container.append(divEl);
        divEl.append(getRandomNumMinMax(1, 81));

        divEl.addEventListener ("click",
            function click() {
                if (divEl.classList[1] === "backgroundlightblue") {
                    divEl.classList.remove("backgroundlightblue")
                } else {
                    divEl.classList.add("backgroundlightblue");
                }
            }
        )
    }
} else if (difficulty === 3) {
    for (i = 0; i < 49; i++){
        const divEl = createMyElement();
        container.append(divEl);
        divEl.append(getRandomNumMinMax(1, 49));

        divEl.addEventListener ("click",
            function click() {
                if (divEl.classList[1] === "backgroundlightblue") {
                    divEl.classList.remove("backgroundlightblue")
                } else {
                    divEl.classList.add("backgroundlightblue");
                }
            }
        )
    }
}

