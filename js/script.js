// PROVA
const level = parseInt(prompt("Scegli il tuo livello di difficoltà"));
console.log(level);

const container = document.createElement('div');
container.className = "container";
document.body.appendChild(container); 
console.log(container);

if (level == 1){
    container.classList.add("easy")

    for(let i = 0; i < 100; i++) {
        addSquare();
    }

} else if (level ==  2){
    container.classList.add("medium")

    for(let i = 0; i < 81; i++) {
        addSquare()
    }

} else if (level == 3) {
    container.classList.add("hard")

    for(let i = 0; i < 49; i++) {
        addSquare();
    }
}









function addSquare () {
    const square = document.createElement('div')
    square.className = 'square';
    container.appendChild(square);

    console.log(square);
}