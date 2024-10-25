const myCursor = document.getElementById("cursor")
console.log(myCursor)
window.addEventListener("mousemove", function(e) {
    const x = e.pageX
    const y = e.pageY
    myCursor.style.width = '80px'
    console.log(myCursor.style.width)
    myCursor.style.transform = `translate(${x - 80/2}px, ${y - 80/2}px)`;
    console.log(e)
})

window.addEventListener("click", function(e) {
    const x = e.clientX
    const y = e.clientY
    const img = document.createElement("img")
    img.src = myCursor.src
    console.log(img.src)
    img.style.width = '80px'
    img.style.transform = `translate(${x - 80/2}px, ${y - 80/2}px)`;
    document.body.appendChild(img)
    console.log(img)
})

// example
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    myCursor.style.width = `${event.target.value * 10}px`
    
    // myText.style.fontSize = `${somevalue}px`
    // myText.style.color.r
  });
  
// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById("myPics");
const context = myPics.getContext("2d");

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});