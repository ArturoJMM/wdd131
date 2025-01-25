const year = document.querySelector("#currentyear");
const full = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

full.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(today)}`;


function calculateWindChill(temp=10, windSpeed=5) {
    let windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);

    return windChill.toFixed(2);
}

const windChill = document.querySelector("#windChill");
windChill.innerHTML = `${calculateWindChill(10, 5)} °C`;