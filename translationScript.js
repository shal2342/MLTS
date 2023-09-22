// translationScript.js

// Function to add a translation button
function addTranslationButton() {
    const translateButton = document.createElement("button");
    translateButton.textContent = "Translate to Hindi";
    translateButton.style.position = "fixed";
    translateButton.style.bottom = "20px";
    translateButton.style.right = "20px";
    translateButton.style.zIndex = "9999";
    translateButton.style.padding = "10px";
    translateButton.style.backgroundColor = "#0073e6";
    translateButton.style.color = "white";
    translateButton.style.border = "none";
    translateButton.style.borderRadius = "5px";
    translateButton.style.cursor = "pointer";
  
    // Add a click event listener to the translation button
    translateButton.addEventListener("click", function () {
      const translateConfirmation = window.confirm("Translate the entire page to Hindi?");
      if (translateConfirmation) {
        translatePageToHindi();
      }
    });
  
    document.body.appendChild(translateButton);
  }
  
  // Function to translate English text to Hindi
  function translateToHindi(text) {
    // Replace English text with Hindi equivalents using a predefined vocabulary
    const hindiVocabulary = {
      "Welcome to My English Website": "मेरी अंग्रेजी वेबसाइट में आपका स्वागत है",
      "This is a sample English webpage.": "यह एक नमूना अंग्रेजी वेबपेज है",
      // Add more translations as needed
    };
  
    return hindiVocabulary[text] || text; // Return the translation or the original text
  }
  
  // Function to translate the entire page to Hindi
  function translatePageToHindi() {
    const allElements = document.querySelectorAll("*"); // Select all elements on the page
  
    allElements.forEach((element) => {
      if (element.textContent) {
        // Translate the text content of each element
        element.textContent = translateToHindi(element.textContent);
      }
    });
  }
  
  // Add the translation button when the page loads
  window.addEventListener("load", addTranslationButton);
  