//JavaScript for Dark Mode 
 
    const toggleButton = document.getElementById("dark-mode-toggle");
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
      } else {
        toggleButton.textContent = "🌙 Dark Mode";
      }
    });
  
//JavaScript for Typewriter Effect

document.addEventListener("DOMContentLoaded", function() {
    const text = "Hey, I am Moumita";
    const subtext = "a computer science student";
    let i = 0, j = 0;
    
    function typeWriterMain() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriterMain, 100);
        } else {
            setTimeout(typeWriterSub, 500); // Delay before subtext starts
        }
    }

    function typeWriterSub() {
        if (j < subtext.length) {
            document.getElementById("typewriter-subtext").innerHTML += subtext.charAt(j);
            j++;
            setTimeout(typeWriterSub, 100);
        }
    }

    typeWriterMain(); // Start typing
});

