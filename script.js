// Typewriter effect for main message
const typewriterText = "Hey, Sarah!";
let index = 0;

function typeWriter() {
  if (index < typewriterText.length) {
    document.getElementById("typewriter").innerHTML += typewriterText.charAt(
      index
    );
    index++;
    setTimeout(typeWriter, 100);
  }
}

// Reveal the hidden message with a fade-in effect
function showMessage() {
  const message = document.getElementById("message");
  message.classList.remove("hidden");
  message.style.opacity = "1";
}

// Create floating hearts with smooth fade
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.querySelector(".hearts").appendChild(heart);

  // Remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Generate hearts every 400 ms
setInterval(createHeart, 400);

// Start the typewriter effect on page load
window.onload = typeWriter;
