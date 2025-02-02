document.addEventListener("DOMContentLoaded", function() {
    const year = document.querySelector("#currentyear");
    const full = document.querySelector("#lastModified");

    const today = new Date();

    year.innerHTML = `${today.getFullYear()}`;

    full.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(today)}`;

    const menuIcon = document.getElementById('menu-icon'); 
    const mainNav = document.getElementById('main-nav');

    menuIcon.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('nav a');
    const menuTitle = document.getElementById('menuTitle');

    navLinks.forEach(link => { 
        link.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            menuTitle.textContent = title;
            if (window.innerWidth <= 600) {
                mainNav.classList.remove("active");
            }
        });
    });

    const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Caracas Venezuela",
        location: "Caracas, Venezuela",
        dedicated: "2000, August, 20",
        area: 15332,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
    },
    {
        templeName: "Lima Perú Los Olivos",
        location: "Lima, Perú",
        dedicated: "2024, January, 14",
        area: 47413,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42524-main.jpg"
    },
    {
        templeName: "Arequipa Perú",
        location: "Arequipa, Perú",
        dedicated: "2019, December, 15",
        area: 26969,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
    },

    ];

  createTempleCard(temples);

  const home = document.querySelector("#home");
  const old = document.querySelector("#old");
  const recent = document.querySelector("#new");
  const large = document.querySelector("#large");
  const small = document.querySelector("#small");

  home.addEventListener("click", () => {
      createTempleCard(temples);
  });

  old.addEventListener("click", () => {
      createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
  });

  recent.addEventListener("click", () => {
      createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
  });

  large.addEventListener("click", () => {
      createTempleCard(temples.filter(temple => temple.area > 90000));
  });

  small.addEventListener("click", () => {
      createTempleCard(temples.filter(temple => temple.area < 10000));
  });

  function createTempleCard(filteredTemples) {
      document.querySelector(".container").innerHTML = "";
      filteredTemples.forEach(temple => {
          let card = document.createElement("section");
          let name = document.createElement("h3");
          let location = document.createElement("p");
          let dedication = document.createElement("p");
          let area = document.createElement("p");
          let img = document.createElement("img");

          name.textContent = temple.templeName;
          location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
          dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
          area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
          img.setAttribute("src", temple.imageUrl);
          img.setAttribute("alt", temple.templeName);
          img.setAttribute("loading", "lazy");

          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(dedication);
          card.appendChild(area);
          card.appendChild(img);

          document.querySelector(".container").appendChild(card);
      });
  }
});