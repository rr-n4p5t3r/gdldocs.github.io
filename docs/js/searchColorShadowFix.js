document.addEventListener('DOMContentLoaded', function() {
    // Select all inputs with the class "search"
    var inputs = document.querySelectorAll(".input-wrap");

    // Log the selected inputs to the console
    console.log(inputs[0].children[0]);
    
    inputs[0].children[0].addEventListener("focus", function() {
        this.style.boxShadow = "0 0 5px var(--theme-color, #9e6eef)"; // Establecer box-shadow en "none" al obtener el foco
    });
    
    inputs[0].children[0].addEventListener("blur", function() {
        this.style.boxShadow = "none";
    });

  });