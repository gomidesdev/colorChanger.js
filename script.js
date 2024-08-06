const color = document.querySelector("#color");
const button = document.querySelector("#changer");

button.addEventListener("click", colorChanger);

function colorChanger(){
    color.style.backgroundColor = getRandomColor();
}

function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";

    for(i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
}
