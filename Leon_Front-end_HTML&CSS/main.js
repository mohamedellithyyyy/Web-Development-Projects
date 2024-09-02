window.addEventListener('scroll', function() {
    var header = document.getElementById('myHeader');
    if (window.pageYOffset > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode"); // Toggle dark mode class on body
}
var clickCount = 0; // Variable to track the number of clicks
window.addEventListener('click', function() {
    var header = document.getElementById('home');
    clickCount++; // Increment the click count on each click
    // If click count is odd, add 'home2' class, else remove it
    if (clickCount % 2 === 1) {
        header.classList.add('home2');
    } else {
        header.classList.remove('home2');
    }
});