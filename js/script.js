(function(){
            emailjs.init({
                publicKey: "NMTmJ9hmFLh_Z_xSR",
            });
})();

const recaptchaToken = grecaptcha.getResponse();
    if (!recaptchaToken) {
        alert("Please complete the reCAPTCHA");
        return;
}

function sendEmail(event) {
    event.preventDefault();
    
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
        'g-recaptcha-response': recaptchaToken
    }

    emailjs.send("service_gd6xkmt", "template_emzasxc", params).then(() => {
            alert("Email sent successfully!");
            grecaptcha.reset();
        }, (err) => {
            alert("Failed to send email: " + JSON.stringify(err));
        });
}