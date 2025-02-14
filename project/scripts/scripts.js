// Show date and year
const year = document.querySelector("#currentyear");
const full = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
full.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(today)}`;


// Formulario de contacto con localStorage
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Guardar en localStorage
        localStorage.setItem("userData", JSON.stringify({ name, email }));

        alert(`Gracias por contactarnos, ${name}!`);
        form.reset();
    });

    // Cargar datos guardados
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData) {
        document.getElementById("name").value = savedData.name || "";
        document.getElementById("email").value = savedData.email || "";
    }
}