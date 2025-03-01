// Ensure proper targeting of the scroll container
const container = document.querySelector(".skill-container");

// Scroll to the left
function handleScrollLeft() {
    console.log("Scrolling Left");
    container.scrollBy({
        left: -200, // Scroll left by 200px
        behavior: "smooth"
    });
}

// Scroll to the right
function handleScrollRight() {
    console.log("Scrolling right");
    container.scrollBy({
        left: 200, // Scroll right by 200px
        behavior: "smooth"
    });
}
