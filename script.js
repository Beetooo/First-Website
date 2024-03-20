let prevScrollPos = window.scrollY;

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    let currentScrollPos = window.scrollY;
    
    if (prevScrollPos > currentScrollPos) {
        document.querySelector("header").style.padding = "40px 5px"; 
    } else {
        document.querySelector("header").style.padding = "5px 5px"; 
    }

    prevScrollPos = currentScrollPos;
}