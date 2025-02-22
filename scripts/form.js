const year = document.querySelector("#currentyear");
const full = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

full.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(today)}`;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

window.addEventListener("DOMContentLoaded", (event) => {
    const selectElement = document.getElementById("prodName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
});

    // Increment the review counter in localStorage
    let reviewCounter = localStorage.getItem("reviewCounter");
    if (reviewCounter === null) {
        reviewCounter = 0;
    }
    reviewCounter++;
    localStorage.setItem("reviewCounter", reviewCounter);

    // Display the review count
    document.getElementById("counter").textContent = reviewCounter;