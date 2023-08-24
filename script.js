const typewriterElem = document.getElementById('typewriter');
const words = ['Upcoming Engineers ', 'Students ', 'University '];
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

window.onload = type;  // Start the typewriter effect once the page is loaded
