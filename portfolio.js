
 
  
  const typingText = 'Andrei Arsenal';
  const typingElement = document.getElementById('typing-text');
  
  let charIndex = 0;
  
  function type() {
    if (charIndex < typingText.length) {
      typingElement.textContent += typingText.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    }
  }
  
  type();
  



  document.getElementById('download-cv-button').addEventListener('click', function() {
    // Replace "path/to/your/cv.pdf" with the actual path to your CV file
    var cvPath = 'cv/andrei_cv.pdf';

    // Create a temporary link element
    var link = document.createElement('a');
    link.href = cvPath;
    link.download = 'cv.pdf';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Clean up the temporary link element
    document.body.removeChild(link);

  });

window.addEventListener("load", () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
  }, 5000);
});

  

 // JavaScript code to toggle between light and dark mode
 const toggleControl = document.querySelector('.toggle-control');
 const root = document.documentElement;

 toggleControl.addEventListener('click', function() {
   if (root.getAttribute('data-theme') === 'dark') {
     root.setAttribute('data-theme', 'light');
   } else {
     root.setAttribute('data-theme', 'dark');
   }
 });
