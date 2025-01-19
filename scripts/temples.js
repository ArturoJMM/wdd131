// Code for the Last modified entry:
const year = document.querySelector("#currentyear");
const full = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `${today.getFullYear()}</span>`;

full.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(today)}</span>`;

// Code for the menu Icon behavior 
const menuIcon = document.getElementById('menu-icon'); 
const mainNav = document.getElementById('main-nav');

menuIcon.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

// Selecting all the menu links
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
