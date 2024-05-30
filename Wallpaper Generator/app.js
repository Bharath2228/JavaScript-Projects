const wallpaper = document.querySelector(".wallpaper");

const inputWidth = document.querySelector(".input-width");
const inputHeight = document.querySelector(".input-height");
const inputLinearStartColor = document.querySelector(".input-linear-start-color");
const inputLinearEndColor = document.querySelector(".input-linear-end-color");
const inputRadialColor = document.querySelector(".input-radial-color");
const btnGenearateWallpaper = document.querySelector(".btn-generate-wallpaper");

/**
 * @param {HTMLCanvasElement} canvasElement 
 * @param {String} linearStartColor 
 * @param {String} linearEndColor 
 * @param {String} radialColor 
 */

function renderWallpaper(canvasElement, linearStartColor, linearEndColor, radialColor){

    const context = canvasElement.getContext("2d")

    const width = canvasElement.width;
    const height = canvasElement.height;

    const LinearGradient = CreateLinearGradient(context, width, height)
    const radialGradient = CreateRadialGradient(context, width, height)

    LinearGradient.addColorStop(0, linearStartColor)
    LinearGradient.addColorStop(1, linearEndColor)

    radialGradient.addColorStop(0, radialColor)
    radialGradient.addColorStop(1, "transparent") // to have see through in radial

    context.fillStyle = LinearGradient;
    context.fillRect(0, 0, width, height)

    context.fillStyle = radialGradient;
    context.fillRect(0, 0, width, height);

}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 * @param {number} width 
 * @param {number} height 
 */

function CreateLinearGradient(context, width, height){
    return context.createLinearGradient(0, 0, width, height) // first two 0's are for the x and y for left and width and height are for the right botton
}

function CreateRadialGradient(context, width, height){
    const x = getRandomNumber(width * 0.75, width); // max and min for random number  
    const y = getRandomNumber(height * 0.25, height * 0.75);
    const size = width / 2; // size for the creating radial element

    return context.createRadialGradient(x, y, 0, x, y, size) // first two x's and size are for the inner circle of radiant and other x, y and sizr is for outer circle of the radial
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function wallpaperInput(){

    wallpaper.width = inputWidth.value;
    wallpaper.height = inputHeight.value;

    renderWallpaper(wallpaper, inputLinearStartColor.value, inputLinearEndColor.value, inputRadialColor.value);
}

btnGenearateWallpaper.addEventListener("click", wallpaperInput)
wallpaperInput();

