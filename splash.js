setTimeout(() => {

    document.body.style.transition = "opacity 0.8s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "login.html";

    }, 800);

}, 3000);

