const myCursor = document.getElementById("cursor");
console.log(myCursor);

window.addEventListener("mousemove", function(e) {
    const x = e.clientX; // Changed from e.pageX to e.clientX
    const y = e.clientY; // Changed from e.pageY to e.clientY
    myCursor.style.width = '80px';
    console.log(myCursor.style.width);
    myCursor.style.transform = `translate(${x - 80 / 2}px, ${y - 80 / 2}px)`;
    console.log(e);
});

window.addEventListener("click", function(e) {
    const x = e.clientX;
    const y = e.clientY;
    const img = document.createElement("img");
    img.src = myCursor.src;
    console.log(img.src);
    img.style.width = '80px';
    img.style.position = 'absolute'; // Make sure it's positioned properly
    img.style.transform = `translate(${x - 80 / 2}px, ${y - 80 / 2}px)`;
    document.body.appendChild(img);
    console.log(img);
});

// If using a canvas (to prevent scrolling during drawing)
const myPics = document.getElementById("myPics");
const context = myPics.getContext("2d");

// Adjust canvas to fit screen and prevent scroll
myPics.width = window.innerWidth;
myPics.height = window.innerHeight;
window.addEventListener('resize', () => {
    myPics.width = window.innerWidth;
    myPics.height = window.innerHeight;
});

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

myPics.addEventListener("mouseup", () => {
    isDrawing = false;
});
