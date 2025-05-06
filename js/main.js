function main() {
    console.log("Hello, World!");
    const contactLink = document.getElementById("contactoLink");
    const contactForm = document.getElementById("formContacto");
    const backgroundOverlay = document.getElementById("backgroundOverlay");
    const closeButton = document.getElementById("closeForm");
  
    let isFormVisible = false;
  
    if (contactLink && contactForm && backgroundOverlay && closeButton) {
  
      backgroundOverlay.style.display = "none";
  
      const toggleFormVisibility = () => {
          isFormVisible = !isFormVisible;
          backgroundOverlay.style.display = isFormVisible ? "flex" : "none";
      };
  
      contactLink.addEventListener("click", function (event) {
          event.preventDefault();
          toggleFormVisibility();
      });
  
      const hideForm = () => {
          backgroundOverlay.style.display = "none";
          isFormVisible = false;
      }
  
      closeButton.addEventListener("click", function(event){
          event.preventDefault();
          hideForm();
      });
  
      backgroundOverlay.addEventListener("click", function (event) {
          if (event.target === backgroundOverlay) {
              hideForm();
          }
      });
    } else {
      console.error("Elemento 'contactoLink' o 'contactForm' no encontrado.");
    }
  }
  
  main();  