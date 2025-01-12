
const year = document.querySelector("#currentyear");
const full = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}</span>`;

full.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(today)}</span>`;