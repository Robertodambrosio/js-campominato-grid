// PROVA
let level = 0;

do {
    level = parseInt(prompt("Scegli il tuo livello di difficoltà"));
} while (level < 0 || level > 3) {}
console.log(level);

const container = document.querySelector('.container');

if (level == 1) {
    container.classList.add("easy")

    addSquare(100);

} else if (level == 2) {
    container.classList.add("medium")

    addSquare(81);

} else if (level == 3) {
    container.classList.add("hard")

    addSquare(49);
}




function addSquare(num) {
    for (let i = 0; i < num; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
        square.addEventListener('click', function () {
            square.classList.add('correct');
        });
    }
}

