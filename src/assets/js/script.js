  // Exemple de code JavaScript pour ajouter la classe active-link
//   const currentUrl = window.location.pathname;

//   const links = document.querySelectorAll('.tab-button');
  
  
  
//   links.forEach(link => {
  
//   if (link.href.includes(currentUrl)) {
  
//   link.classList.add('active-link');
  
//   }
  
//   });


const currentUrl = window.location.pathname;

const links = document.querySelectorAll('.tab-button');

links.forEach(link => {

  // Use direct equality for comparison
  if (link.href === window.location.origin + currentUrl) {
    link.classList.add('active-link');
  }
});



  


  document.querySelectorAll(".custom-select").forEach((select) => {
    const selected = select.querySelector(".selected");
    const optionsList = select.querySelector(".options");
    const options = select.querySelectorAll(".option-item");
    const selectedText = select.querySelector(".selected-text");
    const hiddenInput = select.nextElementSibling;
    const dropdownIcon = select.querySelector(".dropdown-icon");

    // Ouvrir/Fermer le menu
    selected.addEventListener("click", (event) => {
        // Ferme les autres menus
        document.querySelectorAll(".options").forEach(menu => {
            if (menu !== optionsList) menu.classList.add("hidden");
        });

        // Active/Désactive l'affichage de l'option
        optionsList.classList.toggle("hidden");
        dropdownIcon.classList.toggle("rotate-180");

        // Empêcher la propagation pour éviter la fermeture immédiate
        event.stopPropagation();
    });

    // Sélectionner une option
    options.forEach((option) => {
        option.addEventListener("click", () => {
            selectedText.textContent = option.textContent;
            hiddenInput.value = option.dataset.value;
            optionsList.classList.add("hidden");
            dropdownIcon.classList.remove("rotate-180");
        });
    });

    // Fermer si on clique en dehors
    document.addEventListener("click", (e) => {
        if (!select.contains(e.target)) {
            optionsList.classList.add("hidden");
            dropdownIcon.classList.remove("rotate-180");
        }
    });
});









// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);
// Whenever the user explicitly chooses light mode
localStorage.theme = "light";
// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");