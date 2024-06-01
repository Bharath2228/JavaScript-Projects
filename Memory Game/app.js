const tilesContainer = document.querySelector(".tiles");
const colors = ["white", "red", "blue", "yellow", "pink", "violet", "green", "brown"]
const colorPickList = [...colors, ...colors]

const tileCount = colorPickList.length

let revealedCount = 0 // no of tiles that is already revealed and user got correct
let activeTile = null; // refers to tile user just clicked on and looking for the next match
let awaitingEndofMove = false; // when user clicked on the both tile which is wrong

function BuildTile(color){
    const element = document.createElement("div")

    element.classList.add("tile")
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false")

    element.addEventListener("click", () => {

        const revealed = element.getAttribute('data-revealed')

        if(awaitingEndofMove || revealed === "true" || element === activeTile) {
            return;
        }
        element.style.backgroundColor = color;

        if(!activeTile) {
            activeTile = element;

            return;
        }

        const colorTomatch = activeTile.getAttribute("data-color")

        if(colorTomatch === color){
            activeTile.setAttribute("data-revealed", "true")
            element.setAttribute("data-revealed", "true")

            activeTile = null;
            awaitingEndofMove = false;
            revealedCount += 2

            if(revealedCount === tileCount){
                alert("You win! Refresh to play again. ")
            }

            return;
        }

        awaitingEndofMove = true;

        setTimeout(() => {
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;

            awaitingEndofMove = false;
            activeTile = null
        }, 1000)
    })

    return element;
}

for( let i = 0; i < tileCount; i++){
    const randomIndex = Math.floor(Math.random() * colorPickList.length);
    const color = colorPickList[randomIndex];
    const tile = BuildTile(color)

    colorPickList.splice(randomIndex, 1); // remove a single element at random index
    tilesContainer.appendChild(tile)
}