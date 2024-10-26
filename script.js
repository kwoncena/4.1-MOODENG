// script.js

// Custom cursor
const myCursor = document.getElementById("cursor");
const moodengText = document.getElementById("moodeng-text");
window.addEventListener("mousemove", function(e) {
    const x = e.pageX;
    const y = e.pageY;
    myCursor.style.width = '80px';
    myCursor.style.transform = `translate(${x - 40}px, ${y - 40}px)`; // Center cursor
});

// Infinite Scroll Setup
const contentDiv = document.getElementById('content');
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // When reaching the bottom, load more content
        addContent();
    }

    // Change the color of the "MOODENG" text based on scroll position
    changeMoodengColor();
});

// Function to add new content (simulating infinite scroll)
function addContent() {
    const newDiv = document.createElement('div');
    newDiv.style.height = '100vh';
    newDiv.style.backgroundColor = getRandomColor();
    contentDiv.appendChild(newDiv);
}

// Utility function to get a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Mouse click handling
window.addEventListener("click", function(e) {
    const x = e.clientX;
    const y = e.clientY;
    const img = document.createElement("img");
    img.src = myCursor.src || ''; // Use the same image as the custom cursor
    console.log(img.src);

    // Generate a random size between 20px and 150px
    const randomSize = Math.floor(Math.random() * 130) + 20;
    img.style.width = `${randomSize}px`;
    
    img.style.position = 'absolute'; // Ensure image is positioned absolutely
    img.style.transform = `translate(${x - randomSize / 2}px, ${y - randomSize / 2}px)`;
    document.body.appendChild(img);
});

// Function to change the color of the "MOODENG" text based on scroll
function changeMoodengColor() {
    // Calculate the scroll percentage
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Generate a color based on the scroll percentage
    const hue = Math.floor((scrollPercent / 100) * 360); // 0 to 360 for hue
    moodengText.style.color = `hsl(${hue}, 80%, 50%)`; // Using HSL for smooth color transitions
}
