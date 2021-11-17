// PROVA
let level = 0;

do {
level = parseInt(prompt("Scegli il tuo livello di difficoltà"));
} while (level < 0 || level > 3){
}
console.log(level);

const container = document.createElement('div');
container.className = "container";
document.body.appendChild(container); 
console.log(container);

if (level == 1){
    container.classList.add("easy")

    addSquare();
    colorSquare(100);

} else if (level ==  2){
    container.classList.add("medium")

    addSquare()
    colorSquare(81);

} else if (level == 3) {
    container.classList.add("hard")

    addSquare();
    colorSquare(49);
}







function addSquare () {
    const square = document.createElement('div')
    square.className = 'square';
    container.appendChild(square);

    console.log(square);
}

function colorSquare (num) {
for (let i = 0; i < num ; i++) {
let square = addSquare();

square = document.getElementsByClassName("square");
square[i].addEventListener('click', function() {
    square[i].classList.add('correct');
  })
 }
}

