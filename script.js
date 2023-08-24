const typewriterElem = document.getElementById('typewriter');
const words = ['Engineers ', 'Students ', 'University '];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if (charIndex === words[wordIndex].length && !isDeleting) {
        setTimeout(() => {
            isDeleting = true;
            type(); // Call type again after setting isDeleting to true
        }, 1000);
        return; // Exit the function early to wait for the timeout
    } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
    
    typewriterElem.textContent = words[wordIndex].substring(0, charIndex);
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
    
    let timeout = isDeleting ? 100 : 200; // Adjust typing and deleting speed here
    setTimeout(type, timeout);
}
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-left .nav-links');
    const body = document.querySelector('body');

    // Create a div to cover the screen
    const navCover = document.createElement('div');
    navCover.className = 'nav-cover';

    // Copy the navLinks to navCover
    navCover.appendChild(navLinks.cloneNode(true));

    // Append the navCover to the body
    body.appendChild(navCover);

    // Ensure click outside the hamburger when menu is open closes the menu
    navCover.addEventListener('click', function(event) {
        if(event.target === navCover) {
            closeMenu();
        }
    });

    hamburgerMenu.addEventListener('click', function() {
        // Toggle active class to animate nav cover
        navCover.classList.toggle('active');

        // Toggle the hamburger to an X
        toggleMenu();
    });

    function closeMenu() {
        navCover.classList.remove('active');
        toggleMenu();
    }

    function toggleMenu() {
        hamburgerMenu.classList.toggle('toggle');

        // Append lines to convert hamburger to X
        let lines = document.querySelectorAll('.hamburger-menu .line');
        if(hamburgerMenu.classList.contains('toggle')) {
            lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            lines.forEach(line => {
                line.style.transform = 'none';
                line.style.opacity = '1';
            });
        }
    }
});

window.onload = type;  // Start the typewriter effect once the page is loaded
