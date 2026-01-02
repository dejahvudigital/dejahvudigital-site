document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent = "Thanks! This form is a placeholder for now — email hello@dejahvudigital.com.";
  form.reset();
});
