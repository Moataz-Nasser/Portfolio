function sendEmail() {
    let params = {
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        message: document.getElementById("msg")
    }

    emailjs.send("service_gd6xkmt", "template_emzasxc", params);
}