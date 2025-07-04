// toggle theme colors

const body = document.body;
const toggleTheme = document.getElementById("toggle-theme");
const savedTheme = localStorage.getItem('theme');
const favicon = document.getElementById("favicon");

function setFavicon(src) {
  favicon.href = `${src}?v=${new Date().getTime()}`;
}

if(savedTheme && savedTheme === "light"){
    body.classList.add("light-mode");
    setFavicon("img/favicon-light.ico");
}else if(savedTheme && savedTheme === "dark"){
    body.classList.remove("light-mode");
    setFavicon("img/favicon.ico")
}

if(!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches){
    body.classList.add("light-mode");
    setFavicon("img/favicon-light.ico")
}

toggleTheme.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    const isLight = body.classList.contains("light-mode");

    localStorage.setItem("theme", isLight? "light" : "dark");

    setFavicon(isLight ? "img/favicon-light.ico" : "img/favicon.ico");
});


// Form validation

document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
    field.addEventListener('blur', () => {
        field.closest('.form-group').classList.add('touched');
    });
});


// Phone menu

const toggleMenu = document.getElementById("toggle-menu");
const menu = document.getElementById("header-menu");

toggleMenu.addEventListener("click", () => {
    let isVisible = menu.getAttribute("data-visible");

    if(isVisible === "false") {
        menu.setAttribute("data-visible", "true");
    } else {
        menu.setAttribute("data-visible", "false");
    }
});


emailjs.init("NMTmJ9hmFLh_Z_xSR");

function sendEmail(event) {
    event.preventDefault();
    
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    }

    emailjs.send("service_gd6xkmt", "template_emzasxc", params).then(() => {
            alert("Email sent successfully!");
        }, (err) => {
            alert("Failed to send email: " + JSON.stringify(err));
        });
}